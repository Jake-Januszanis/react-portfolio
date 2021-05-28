

import '../css/modals.scss';
import '../css/about.scss';

import {FaJsSquare, FaReact, FaNode, FaHtml5, FaSass, FaNpm, FaGithub, FaLinkedin } from 'react-icons/fa'; 
import {SiTailwindcss, SiNetlify, SiHeroku} from 'react-icons/si';
import {CgCloseO} from 'react-icons/cg';
import mongoDbIcon from '../images/mongodb.svg';


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
                <p className="about-modal__text">Hi, I'm Jake Januszanis and I'm a self-taught Web Developer based out of Denver, CO. Former long-distance 
                backpacker now dedicated to learning the art of web development. Since writing my first "Hello World" I was hooked with programming and
                my passion for learning new skills keeps me pushing myself each day to become a better developer.</p>

                <a className="about-modal__link" href="https://github.com/Jake-Januszanis" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a className="about-modal__link" href="https://www.linkedin.com/in/jake-januszanis" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                
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
                   <img className="about-modal__icons" src={mongoDbIcon} title="MongoDB" alt="MongoDb icon"></img>
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