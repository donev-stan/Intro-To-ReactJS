import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p>Intro Todo List App</p>
            <p><Link to="/">Go Back</Link></p>
        </div>
    )
}

export default About
