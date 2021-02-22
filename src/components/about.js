

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
                <p className="about-modal__text">Hi I'm Jake Januszanis and I am a Web-Developer based out of Denver, CO.</p>
                
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