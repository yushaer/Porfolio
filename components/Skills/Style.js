import styled, { css } from 'styled-components';
import { Box, Container } from '@mui/material';

const StyledDiv = styled.div`
${({ theme, isVisible, delay }) => `
      /* inner white */
      opacity: ${isVisible ? 1 : 0};
      transition: opacity 1s ease-in-out;
      transition-delay:  ${delay}s;
 
  



`}
`
export default StyledDiv;