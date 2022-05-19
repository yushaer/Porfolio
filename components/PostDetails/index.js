import { Container, Grid, Box, Typography, IconButton, Stack, AppBar, Paper, Toolbar } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import moment from 'moment'
import Image from 'next/image'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { alpha, styled } from '@mui/material/styles';
import ReactMarkdown from "react-markdown";
const PostDetails = (props) => {

  const date = moment(props.publishedAt).format('MM/DD/YYYY')

  return (
    <Box sx={{ my: 2, height: '100vh' }} pt={0.5}>
      <Typography variant="h1" >
        {props.title}
      </Typography>


      <Paper elevation={2} sx={{ p: 2, }} pt={2}>
        {`Posted ${date} By ${props.author}`}
      </Paper>
      <br></br>
      <div css={css`
 
        width:  fit-content;  
 
        display : flex;
        justify-content: center;
        align-items: center;
            & > img {
              width: 100%;
        object-fit: contain;
      
      }
    `}>
        <img alt="Vercel logo" src={`${props.imageUrl}`} />

      </div> <br></br>


      <Paper elevation={2} sx={{ p: 10, }} pt={2}>


        <Box sx={{ my: 2 }} pt={2}>


          <article dangerouslySetInnerHTML={{ __html: props.content }} ></article>
        </Box>

      </Paper>
    </Box>
  )
}
export default PostDetails;