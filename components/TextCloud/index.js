import TagCloud from 'TagCloud'
import StyledSphere from './style'
import { useEffect, useState } from 'react'

const TextSphere = (props) => {
    const [length, setLength] = useState(0);
    const data = [
        'JavaScript', 'CSS', 'HTML',
        'C', 'C++', 'React',
        'Python', 'Java', 'git',
        'django', 'Node.js', 'Express.js',
        'MySQL', 'jQuery',
        'Bootstrap', 'Material-UI',
        'Next.js', 'React-Native',
        'Firebase', 'Apache',
        'MongoDB', 'SQL',
        'TypeScript', 'Git',
    ]
    useEffect(() => {

        TagCloud(".textSphere", data, {
            radius: screen.width > 500 ? 250 : 100,
            // slow, normal, fast
            maxSpeed: 'fast',
            initSpeed: 'fast',

            // 0 = top
            // 90 = left
            // 135 = right-bottom
            direction: 135,

            keep: false,


        });
        setLength(data.length);
        return () => {
            let tagClouds = document.getElementsByClassName('.textSphere');
            for (let i = 0; i < tagClouds.length; i++) {
                tagClouds[0].remove();

            }
        };


    }, []);
    return (
        <StyledSphere className="textSphere" length={length}>
        </StyledSphere>
    )
}

export default TextSphere