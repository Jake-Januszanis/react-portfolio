

import '../css/modals.scss';
import '../css/about.scss';
import {FaJsSquare, FaReact, FaNode, FaHtml5, FaSass } from 'react-icons/fa'; 
import {SiTailwindcss} from 'react-icons/si';
import {CgCloseO} from 'react-icons/cg';


const About = ({display, close}) => {
    if (display === true) {
        return (
            <div className="modal-show">
                <div className="about-modal">
               
                <button onClick={close} className="modal-close-btn" name='about'><CgCloseO style={{pointerEvents: 'none' }} /></button>
                <div className="about-modal__title">About Me</div>
                <p className="about-modal__text"></p>
                
                <div className="about-modal__icons-container">
                   <FaJsSquare className='about-modal__icons' style={{color: '#fcdc00'}} title="Javascript" />
                   <FaReact className='about-modal__icons' style={{color: '#61dafb'}} title="React"/>
                   <FaNode className='about-modal__icons' style={{color: "#43853d"}} title="Node.js"/>
                   <FaHtml5 className='about-modal__icons' style={{color: '#f06529'}} title="HTML5"/>
                   <FaSass className='about-modal__icons' style={{ color: '#bf4080'}} title="Sass"/>
                   <SiTailwindcss className='about-modal__icons' style={{ color: '#06B6D4'}} title="Tailwind CSS"/>
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