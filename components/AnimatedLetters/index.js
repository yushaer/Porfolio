import { useState, useEffect } from 'react'
import StyledSpan from './Style'
const AnimatedLetters = (props) => {
    const [letterClass, setLetterClass] = useState('letter-intro');
    useEffect(() => {

        const timer = setTimeout(() => {

            setLetterClass('letter-hover');
        }, 4000)
        return () => {
            clearTimeout(timer);
        };



    }, []);
    const letters = props.title.split("");
    const length = letters.length;

    return (
        <StyledSpan length={length} isVisible={props.isVisible} useDefaultColor={props.useDefaultColor}>
            {letters ? letters.map((char, index) => {

                return (
                    <span className={`letter ${letterClass} _${index}`} key={index}>{char}</span>
                );
            }) : null}

        </StyledSpan>

    )
}
export default AnimatedLetters;