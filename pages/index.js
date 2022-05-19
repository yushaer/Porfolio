import Head from 'next/head'
import 'animate.css';
import AnimatedLetters from '../components/AnimatedLetters';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled, { css } from 'styled-components';
import TextSphere from '../components/TextCloud';
import { useState, useRef, useEffect } from 'react';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Header from '../components/Header'
import { StyledDiv } from '../components/Header/Style';
import { Container, Grid, Box, Typography, IconButton, Stack, AppBar, Paper, Toolbar, Divider } from '@mui/material'


import Skills from '../components/Skills';
import Projects from '../components/Projects';
import { useInView } from 'react-intersection-observer';



const Styledlayer = styled(ParallaxLayer)`
${({ theme, length }) => `
      /* inner white */
 
   background-color: ${theme.palette.background.skills};

`}
`


export default function Home(props) {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  function switchMode() {
    props.setMode(props.mode === 'light' ? 'dark' : 'light');
  }

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }

  const projectFactor = typeof window == "undefined" ? 650 : window.innerWidth < 768 ? 2 : 0

  return (
    <>
      <Head>

        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Yushae Raza's portfolio" />
      </Head>
      {/* 
      
          background-color: #08AEEA;
      background-image: linear-gradient(180deg, #08AEEA 0%, #2AF598 100%);


    width:100vh;

          background-size: cover;
          background-position: center;

          background-repeat: no-repeat; */}
      <Parallax pages={3.5 + projectFactor} className="scroll" style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} style={{
          backgroundColor: '#08AEEA',
          backgroundImage: 'linear-gradient(180deg, #08AEEA 0%, #2AF598 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'



        }}></ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5} style={{
          display: "flex",
          'alignItems': 'center',
          'justifyContent': 'center',

        }}><Header /></ParallaxLayer>


        <Styledlayer offset={1}   > </Styledlayer>
        <ParallaxLayer offset={1} speed={0.6} style={{
          height: 'auto'
        }} ><Skills /></ParallaxLayer>



        <ParallaxLayer factor={1 + projectFactor} offset={2} style={{

          backgroundColor: '#08AEEA',
          backgroundImage: 'linear-gradient(180deg,#2AF598  0%, #08AEEA  100%)',
          height: "auto",

          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'



        }}> </ParallaxLayer>
        <ParallaxLayer factor={1 + projectFactor} offset={2} speed={0.5} style={{

          height: "100%"
        }} ><Projects /></ParallaxLayer>
      </Parallax>










    </>

  )
}
