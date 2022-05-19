import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { cloneElement } from 'react'
import Post from '../../components/Post'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import { Container, Grid, Box, Typography, IconButton, Stack, AppBar, Paper, Toolbar, Divider, CircularProgress } from '@mui/material'
import Logo from '../../components/Logo'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import * as api from '../../api'
import { textAlign } from '@mui/system'
import { useInView } from 'react-intersection-observer';



export default function Blog(props) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress size="4rem" />
      </Box>)
  }

  const { posts, tags } = props;

  function switchMode() {
    props.setMode(props.mode === 'light' ? 'dark' : 'light');
  }
  return (
    <>
      <Head>

        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Yushae Raza's personal blog" />
      </Head>



      <main style={{ paddingTop: "5em" }}>
        <Container>
          <Typography variant="h1" align="center" >
            Blog
          </Typography>
          <Divider />
          <br></br>
          <Grid container spacing={2}>



            <Grid item xs={12} md={8}>

              {posts.map((post, idx) => (<>



                <Post
                  title={post.title}
                  publishedAt={post.published_at}
                  author={post.authors[0].name}

                  imageUrl={post.feature_image}
                  description={post.excerpt}
                  category={post.tags[0].name}
                  slug={post.slug} /><br></br>

              </>)
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              <Sidebar tags={tags} />
            </Grid>



          </Grid>
        </Container>
      </main>

    </>

  )
}
export const getStaticProps = async () => {
  // get posts from our api
  const { posts } = await api.getPosts(0);
  const { tags } = await api.getTags();
  //  console.log(posts)




  return {
    props: { posts, tags },
    revalidate: 10
  };
}