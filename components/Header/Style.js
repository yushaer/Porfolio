import { Container, Grid, Box, Typography, IconButton, Stack, AppBar, Paper, Toolbar } from '@mui/material'
import 'animate.css';
import styled, { css } from 'styled-components';


const createAnimateDelay = () => {

  let style = '';
  for (let i = 0; i <= 23; i++) {
    style += `.letter-intro._${i}{
            animation-delay: ${i / 10}s;
        }`
  }
  return css`${style}`


}

export const StyledDiv = styled.div`
${({ theme }) => `
 
      

      
          background-color: #08AEEA;
      background-image: linear-gradient(180deg, #08AEEA 0%, #2AF598 100%);


    width:100vh;

          background-size: cover;
          background-position: center;

          background-repeat: no-repeat;

      

      



`}
`

export const StyledBox = styled(Box)`
  ${({ theme }) => `
 
    min-height: 70vh;
    display: flex;
   
    align-items: center;
    text-align: center;
//     background-color: #08AEEA;
// background-image: linear-gradient(180deg, #08AEEA 0%, #2AF598 100%);




//     background-size: cover;
//     background-position: center;
 
//     background-repeat: no-repeat;
   
    

    h2 {
      font-weight: bolder;
      color:white;
      
     
    }
    
 

 
  `}
`





