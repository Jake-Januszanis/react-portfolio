

import '../css/projects.scss';
import '../css/modals.scss';
import {CgCloseO} from 'react-icons/cg';
import {FaLink, FaGithub} from 'react-icons/fa';


const weatherGIF = require('../images/weather-appGIF.mp4');
const portImg = require('../images/PortfolioImgCrop.png');
const pomoTimerGIF = require('../images/pomo3.mp4');

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
                        <source src={weatherGIF.default} type="video/mp4" alt="Weather App gif"/>
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                                      
                    </div>

                    <div className='project-modal-container__right'>
                        <h2 className="project-modal-container__right-title">React Weather App</h2>
                        <h3 className="project-modal-container__right-title-sm">(React, Tailwind CSS, Express, Heroku)</h3>
                        
                        <a className="project-modal-container__right-buttons" href="https://github.com/Jake-Januszanis/react-weather" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a className="project-modal-container__right-buttons" href="https://react-weather-v2.herokuapp.com/" target="_blank" rel="noreferrer"><FaLink /></a>

                        <p className="project-modal-container__right-description">
                        Weather App that takes 5 digit US zipcode and retrieves API data to display both current forecast or 5 day extended forecast. Code was written
                        using updated syntax including React hooks and Javascript ES6 aysnc/await functions for improved performance
                        </p>
                    </div>
                    </div>
               
                {/* Second project card */}
                    <div className="project-modal-container">
                    <div className="project-modal-container__left">
                    <video className="project-modal-container__left-gif" onMouseEnter={loopVideo}>
                        <source className="project-modal-container__left-gif" src={pomoTimerGIF.default}  alt="Pomodoro Timer App gif" />
                       
                    </video>
                                      
                    </div>

                    <div className='project-modal-container__right'>
                        <h2 className="project-modal-container__right-title">Pomodoro Timer</h2>
                        <h3 className="project-modal-container__right-title-sm">(HTML, SASS, JavaScript, EJS, Express, Mongoose, MongoDB)</h3>
                        
                        <a className="project-modal-container__right-buttons" href="https://github.com/Jake-Januszanis/pomodoro-timer" target="_blank" rel="noreferrer"><FaGithub /></a>
                        
                        <p className="project-modal-container__right-description">
                        Pomodoro timer app created to help users study more efficiently. App has register/login page with validation to allow users to keep track
                        of time spent studying and save their progress to MongoDB database.
                        </p>
                    </div>
                   
                    </div>

                    {/* Third Project Card */}
                    <div className="project-modal-container">
                    <div className="project-modal-container__left">
                    <img className="project-modal-container__left-img" src={portImg.default} alt="Portfolio Site"></img>
                    </div>

                    <div className='project-modal-container__right'>
                        <h1 className="project-modal-container__right-title">Reactfolio</h1>
                        <h3 className="project-modal-container__right-title-sm">(React, SASS, Netlify)</h3>
                        <a className="project-modal-container__right-buttons" href="https://github.com/Jake-Januszanis/react-portfolio" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <p className="project-modal-container__right-description">
                        Portfolio created using React and Sass to showcase projects and resume for potential employers. Website is fully responsive and is currently hosted 
                        on Netlify.
                        </p>
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
