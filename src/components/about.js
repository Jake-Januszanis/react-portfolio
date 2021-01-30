

import '../css/modals.scss';
import '../css/about.scss';

import {FaJsSquare, FaReact, FaNode, FaHtml5, FaSass, FaNpm, FaGithub } from 'react-icons/fa'; 
import {SiTailwindcss, SiNetlify, SiHeroku} from 'react-icons/si';
import {CgCloseO} from 'react-icons/cg';


const About = ({display, close}) => {

    const handleKeyDown = e => {
        console.log(e.key)
    }

    if (display === true) {
        return (
            <div onKeyDown={handleKeyDown} tabIndex={0} className="modal-show">
                <div className="about-modal">
               
                <button onClick={close} className="modal-close-btn" name='about'><CgCloseO style={{pointerEvents: 'none' }} /></button>
                <div className="about-modal__title">About Me</div>
                <p className="about-modal__text">My name is Jake Januszanis and I'm a Web-Developer based out of Denver, CO. My passion for coding
                stemmed from my problem solving ability and my drive to keep learning each day.<br></br>
                When I'm not staring at my code editor you can find me on the mats training Brazilian Jiu-Jitsu or in the mountains crushing some miles.
                </p>
                
                <h1 className="about-modal__icons-title">Tech/Tools I've worked with</h1>
                <div className="about-modal__icons-container">
                   <FaJsSquare className='about-modal__icons' style={{color: '#fcdc00'}} title="Javascript" />
                   <FaReact className='about-modal__icons' style={{color: '#61dafb'}} title="React"/>
                   <FaNode className='about-modal__icons' style={{color: "#43853d"}} title="Node.js"/>
                   <FaHtml5 className='about-modal__icons' style={{color: '#f06529'}} title="HTML5"/>
                   <FaSass className='about-modal__icons' style={{ color: '#bf4080'}} title="Sass"/>
                   <SiTailwindcss className='about-modal__icons' style={{ color: '#06B6D4'}} title="Tailwind CSS"/>
                   <FaNpm className='about-modal__icons' style={{ color: '#cb0000'}} title="Npm" />
                   <FaGithub className='about-modal__icons' title="github" />
                   <SiHeroku className='about-modal__icons' style={{ color: '#79589F'}} title="Heroku" />
                   <SiNetlify className='about-modal__icons' style={{ color: '#15847D'}} title="Netlify" />
                </div>
                </div>
            </div>
        ) 
    } else {
        return (
            <div className="modal-hide"></div>
        )
    }

}

export default About;