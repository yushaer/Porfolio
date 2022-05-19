import { Container, Grid, Box, Typography, IconButton, Stack, AppBar, Paper, Toolbar, Divider } from '@mui/material'
import styled, { css } from 'styled-components';
import 'animate.css';
import TextSphere from '../TextCloud';
import StyledDiv from './Style';
import AnimatedLetters from '../AnimatedLetters';
import { useInView } from 'react-intersection-observer';


const Projects = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });
    return (

        <Container ref={ref} style={{

        }}>
            <StyledDiv isVisible={inView} delay="0">
                <div style={{ textAlign: "center" }} >
                    {/* font-size: 4rem;
                         font-weight: bolder; */}
                    <Typography variant="h1" style={{
                        fontSize: "4rem",
                        fontWeight: "bolder",


                    }}>Skills</Typography>
                </div>
                <Divider /><br></br>
            </StyledDiv>
            <StyledDiv isVisible={inView} delay="1">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <div style={{ display: "flex", position: 'relative', top: "40%", alignItems: "center" }}>
                            <Typography variant="h5">I am a Enthusiastic Web/Software Developer eager to contribute to team success through hard work, attention to detail, and excellent organizational skills. A clear understanding of both frontend and backend and training in Computer Science. Motivated to learn, grow and excel in the tech industry.</Typography>
                        </div>
                        {/* <Paper style={{ padding: "1em" }}>
                <Typography variant="p" >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
              </Paper> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextSphere />
                    </Grid>
                </Grid>
            </StyledDiv>

            {/* <TextCloud texts={data} /> */}
        </Container>

    )
}
export default Projects;