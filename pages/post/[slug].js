import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { cloneElement } from 'react'
import { Container, Grid, Box, Typography, IconButton, Stack, AppBar, Paper, Toolbar, CircularProgress } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PostDetails from '../../components/PostDetails';
import Sidebar from '../../components/Sidebar'
import * as api from '../../api'
const Post = (props) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress size="4rem" />
      </Box>)
  }
  const { post } = props;
  console.log(post)

  return (
    <><Head>
      <title>{post.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={post.description} />
    </Head>
      <main>
        <Container>

          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <PostDetails
                title={post.title}
                publishedAt={post.published_at}
                author={post.authors[0].name}
                imageUrl={post.feature_image}

                content={post.html}
                category={post.tags[0].name}
                slug={post.slug} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Sidebar tags={props.tags} />
            </Grid>
          </Grid>

        </Container></main></>)


}
export default Post;
export async function getStaticPaths() {
  const { posts } = await api.getSlugs();
  console.log(posts)

  // Call an external API endpoint to get posts
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const { posts } = await api.getPost(params.slug)
  const { tags } = await api.getTags();

  // Pass post data to the page via props
  return { props: { post: posts[0], tags: tags }, revalidate: 10 }
}
