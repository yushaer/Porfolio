import styled, { css } from 'styled-components';
import 'animate.css';
function ColorLuminance(hex, lum) {

    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    var rgb = '', c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }

    return rgb;
}
const generateRandomColor = (length) => {

    let style = '';
    for (var i = 0; i < length; i++) {
        var color = Math.floor(Math.random() * 16777215).toString(16)

        var glow = ColorLuminance('#' + color, 0.3);

        style += ` 
         & span:nth-child(${i + 1}) {
             color:#${color.toString(16)};
             transition: text-shadow 0.5s ease-in-out,
            font-size  0.5s ease-in-out;
            text-shadow: 0 0 20px #${glow};
             &:hover{
                 font-size: 2.5rem;
                text-shadow: 0 0 60px #${glow}, 0 0 70px #${glow};
             }
            }
        `
    }
    return css`${style}`


}
const StyledSphere = styled.div`
${({ theme, length }) => `
      /* inner white */
 
   
        & div {
            animation: bounceIn;
           ${generateRandomColor(length)}
           & span {
                font-size: 2rem;
                border-radius: 50%;
  
                
 
           }
  



`}
`
export default StyledSphere;