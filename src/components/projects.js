

import '../css/projects.scss';
import '../css/modals.scss';
import {CgCloseO} from 'react-icons/cg';
import {FaLink, FaGithub, FaReact, FaSass, FaNode} from 'react-icons/fa';
import {SiNetlify, SiHeroku, SiTailwindcss} from 'react-icons/si';

const weatherGIF = require('../images/weather-appGIF.mp4');
const portImg = require('../images/PortfolioImgCrop.png');

function Projects ({display, close}) {

    const loopVideo = (e) => {
        e.target.play();
    }
    
    if (display === true) {
        return (
            <div className="modal-show">
                <section className="project-modal">
                    <button onClick={close} className="modal-close-btn" name='projects'><CgCloseO style={{pointerEvents: 'none' }} /></button>
                    <h1 className="project-modal__title">Projects</h1>

                    {/* First project Card */}
                    <div className="project-modal-container">
                    <div className="project-modal-container__left">
                    <video className="project-modal-container__left-gif" onMouseEnter={loopVideo}>
                        <source src={weatherGIF.default} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                                      
                    </div>

                    <div className='project-modal-container__right'>
                        <h2 className="project-modal-container__right-title">React Weather App</h2>
                        
                        <a className="project-modal-container__right-buttons" href="https://github.com/Jake-Januszanis/react-weather" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a className="project-modal-container__right-buttons" href="https://react-weather-v2.herokuapp.com/" target="_blank" rel="noreferrer"><FaLink /></a>

                        <p className="project-modal-container__right-description">
                        Weather App created using React and Express. App takes 5 digit US zipcode and
                        retrives API data to display both current forecast or 5 day extended forecast. 
                        </p>
                        <div className="project-modal-container__right-icons">
                        <FaReact style={{color: '#61dafb'}} title="React"/>
                        <FaNode style={{color: "#43853d"}} title="Node.js"/>
                        <SiTailwindcss style={{ color: '#06B6D4'}} title="Tailwind CSS"/>
                        <SiHeroku style={{ color: '#79589F'}} title="Heroku" />
                        </div>
                    </div>
                   
                    </div>

                    {/* Second Project Card */}
                    <div className="project-modal-container">
                    <div className="project-modal-container__left">
                    <img className="project-modal-container__left-img" src={portImg.default}></img>
                    </div>

                    <div className='project-modal-container__right'>
                        <h1 className="project-modal-container__right-title">Reactfolio</h1>
                        <a className="project-modal-container__right-buttons" href="https://github.com/Jake-Januszanis/react-portfolio" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <p className="project-modal-container__right-description">
                        Portfolio created using React and Sass. Site hosted on Netlify server.
                        </p>
                        <div className="project-modal-container__right-icons">
                        <FaReact  style={{color: '#61dafb'}} title="React" />
                        <FaSass style={{ color: '#bf4080'}} title="Sass"/>
                        <SiNetlify style={{ color: '#15847D'}} title="Netlify" />
                    </div>
                   
                    </div>
                    </div>
                </section>
            </div>
        ) 
    } else {
        return (
            <div className="modal-hide"></div>
        )
    }

}

export default Projects;

{/* <div className="project-modal-container__right-list-title">Built with:</div>
                            <p className='project-modal-container__right-list-item'>React</p>
                            <p className='project-modal-container__right-list-item'>Sass</p>
                            <p className='project-modal-container__right-list-item'>Netlify</p>
                        </div> */}