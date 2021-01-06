import { useState } from 'react';
import '../css/about.scss'

function About () {
    const [display, setDisplay] = useState()

    return (
        <div className="about-modal" style={{ display: 'block' }}>
            <h1>About Modal</h1>
        </div>
    )
}

export default About;