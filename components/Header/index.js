import { Container, Grid, Box, Typography, IconButton, Stack, AppBar, Paper, Toolbar } from '@mui/material'
import Logo from '../Logo'
import { StyledBox } from './Style'
import { useState, useEffect } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import AnimatedLetters from '../AnimatedLetters'

const Header = () => {
    // const [letterClass, setLetterClass] = useState('letter-intro');
    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('letter-hover');
    //     }, 4000)
    // }, []);
    const title = "I'm Yushae";

    return (
        <StyledBox>
            <Container>
                <Grid container  >
                    <Grid item xs={12} md={8}>

                        <AnimatedLetters title="Hello World, I am Yushae" isVisible={true} /><br></br>


                        <br></br>
                        <Typography variant="p" sx={{
                            fontColor: 'red',
                            color: 'white',
                            fontSize: '1.5rem',


                            animation: 'bounce 1s',


                        }}>
                            I am a Enthusiastic Web/Software Developer eager to contribute to team success through hard work, attention to detail, and excellent organizational skills. A clear understanding of both frontend and backend and training in Computer Science. Motivated to learn, grow and excel in the tech industry.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Logo width={200} className="logo" />
                    </Grid>

                </Grid>
            </Container>
        </StyledBox>

    )
}
export default Header