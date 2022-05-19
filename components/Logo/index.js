import styled from 'styled-components';
const StyledSVG = styled.svg`
${({ theme, width, delay }) => `
 width:${width ? width + "px" : "100px"};
 &:hover {
     & path {
        
        fill: none;
        transition: all 0.5s;
     }
 }
 & path {
   stroke: ${theme.palette.text.primary};
   stroke-align: inside;
   stroke-inline-width: 0.5px;
   stroke-linecap:round;
   stroke-linejoin:round;
   stroke-width:8px;
   stroke-dasharray: 2000;
  stroke-dashoffset: 0;
  animation: dash 2s linear;
  animation-delay: ${delay ? delay : "0s"};
    color 5.9s linear ; 
 
    
  fill:${theme.palette.text.primary};
  
   @keyframes dash {
         from {
             opacity: 0;
             fill:none;
             stroke-dashoffset: 2000;
             
              
            }
            to {
                stroke-dashoffset: 0;
             
               opacity: 1;
            
            }
            
        }
        @keyframes color {
         from {
             fill:none;
             
             
              
            }
            to {
                fill:${theme.palette.text.primary};
             
               
            
            }
            
        }
    }

     

`}
`
const Logo = (props) => {
    return (
        <StyledSVG className={props.className} delay={props.delay} width={props.width} viewBox="0 0 360 281" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M213.048 0.5H223.5C299.555 0.5 351.386 39.6645 356.639 89.399C359.259 114.194 349.297 138.42 328.158 155.772C314.833 166.709 297.539 174.602 276.739 178.862L357 280.5H308.5L197.409 142.5H238.5C270.615 142.5 291.143 134.405 302.78 124.853C314.078 115.58 317.991 104.306 316.861 93.601C314.737 73.4926 291.222 43.9333 233.76 40.776L151 159.771V280.5H111V160.948L0.871216 33.5813L31.1288 7.41872L129.285 120.938L213.048 0.5Z" fill="black" />
        </StyledSVG>
    )
}
export default Logo;

