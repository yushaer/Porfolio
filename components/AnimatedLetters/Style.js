import 'animate.css';
import styled, { css } from 'styled-components';
const createAnimateDelay = (length) => {

    let style = '';
    for (let i = 0; i <= length; i++) {
        style += `.letter-intro._${i}{
            animation-delay: ${i / 10}s;
        }`
    }
    return css`${style}`


}


const StyledSpan = styled.span`
 ${({ theme, length, useDefaultColor, isVisible }) => `
 

    

   
    .letter{

    display: inline-block;
    font-size: 4rem;
    font-weight: bolder;
    color:${!useDefaultColor ? 'white' : theme.palette.text.primary};


        
    }
    .letter-intro{
        transform: translateY(-2000%);
        display: inline-block;
         
       display: ${isVisible ? 'inline-block' : 'none'};
       
        
        animation: bounceInUp;
        animation-duration: 1s;
        animation-delay: 1s;
        animation-fill-mode: forwards;
         

    }



    .letter-hover{
        animation-fill-mode: both;
        min-width: 10px;
        &:hover{
        
            color:  ${theme.palette.primary.main};
            animation: rubberBand 1s; /* referring directly to the animation's @keyframe declaration */
        }

        
    }
    ${createAnimateDelay(length)}
  



    `}
`
export default StyledSpan;