import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import { cloneElement } from 'react'
import Post from '../../../components/Post'
import Sidebar from '../../../components/Sidebar'
import Header from '../../../components/Header'
import { Container, Grid, Box, Typography, IconButton, Stack, AppBar, Paper, Toolbar, Divider } from '@mui/material'
import Logo from '../../../components/Logo'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import * as api from '../../../api'
import { textAlign } from '@mui/system'




export default function Category(props) {

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
                        Category: {props.category}
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
export async function getStaticPaths() {
    const { tags } = await api.getTags();


    // Call an external API endpoint to get posts
    return {
        paths: tags.map(tag => ({ params: { slug: tag.slug } })),
        fallback: false
    }
}

function findTagName(slug, tags) {
    return tags.find(tag => tag.slug === slug).name;
}
export const getStaticProps = async ({ params }) => {
    console.log(`Building slug: ${params.slug}`)
    // get posts from our api
    const { posts } = await api.getPostsByTag(params.slug, 0)
    // const tag = await  api.getTagName(params.slug);

    const { tags } = await api.getTags();

    //  console.log(posts)




    return {
        props: { posts, tags, category: findTagName(params.slug, tags) },
        revalidate: 10
    };
}