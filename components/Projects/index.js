import { Container, Grid, Box, Typography, IconButton, Stack, AppBar, Paper, Toolbar, Divider } from '@mui/material'
import styled, { css } from 'styled-components';
import 'animate.css';
import TextSphere from '../TextCloud';
import AnimatedLetters from '../AnimatedLetters';
import { useInView } from 'react-intersection-observer';
import ProjectList from './ProjectList';
import StyledDiv from './Style';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const Projects = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });
    return (

        <Container ref={ref} style={{
            height: '100%',
            animation: "backInDown 1s ease-in-out"
        }}>

            <div style={{ textAlign: "center" }} >
                <AnimatedLetters title="Projects" isVisible={inView} useDefaultColor={true} />
            </div>
            <Divider /><br></br>


            <StyledDiv >
                <Grid container spacing={1}>
                    {ProjectList.map((project, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card  >
                                    <CardMedia
                                        component="img"
                                        image={project.image}
                                        alt="image"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {project.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={
                                            () => {
                                                window.open(project.link, "_blank")
                                            }
                                        }>Github</Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                        )
                    })}
                </Grid>
            </StyledDiv>





        </Container>

    )
}
export default Projects;