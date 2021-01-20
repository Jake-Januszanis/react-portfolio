

import '../css/modals.scss';
import '../css/about.scss';
import {FaJsSquare, FaReact, FaNode, FaHtml5, FaSass } from 'react-icons/fa'; 

function About ({display, close}) {
    if (display === true) {
        return (
            <div className="modal-show">
                <button onClick={close} name="about">Close</button>
                <div className="about-modal">
                <h1 className="about-modal__title">About Me</h1>
                <p className="about-modal__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices magna ut tristique pulvinar. Nam bibendum venenatis velit, vitae congue metus efficitur et. Vestibulum dolor lectus, tempor condimentum dui a, molestie pretium ligula. Sed feugiat eros at lacus malesuada, vel elementum sapien dapibus. Aliquam erat volutpat. Sed quis iaculis magna.</p>
                
                <div className="about-modal__icons-container">
                   <FaJsSquare className='about-modal__icons' style={{color: '#fcdc00'}} />
                   <FaReact className='about-modal__icons' style={{color: '#61dafb'}} />
                   <FaNode className='about-modal__icons' style={{color: "#43853d"}}/>
                   <FaHtml5 className='about-modal__icons' style={{color: '#f06529'}}/>
                   <FaSass className='about-modal__icons' style={{ color: '#bf4080'}}/>
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