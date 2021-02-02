
import React from 'react';
import "../css/home.scss";
import { useState } from 'react';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';

const resume = require("../images/hidden-resume.pdf");





export default function Home() {

    const [display, updateDisplay] = useState({
        about: false,
        projects: false,
        contact: false,
        resume: false
      })
    
    let showModal = (event) => {
        updateDisplay({
            ...display,
            [event.target.name]: true
        })
    }

    let hideModal = (event) => {
        updateDisplay({
            ...display, 
            [event.target.name]: false
        })
    }

    const handleKeyDown = e => {
        if (e.key === "Escape") {
            updateDisplay({
                about: false,
                projects: false,
                contact: false,
                resume: false
            })
        } 
    }

    function openPdf() {
        window.open(resume.default, "")
    }

    


    return (
        <div className="home" onKeyDown={handleKeyDown} tabIndex={0}>
        <div className="main-container">
          <h1 className="main-container__title-primary">Jake Januszanis</h1>
          <h2 className="main-container__title-sub">Full Stack Web Developer</h2>
          <div className="divider"></div>
          <div className="main-container__links">
          <button className="main-container__links-text" onClick={showModal} name="about">About</button>
          <button className="main-container__links-text" onClick={showModal} name="projects">Projects</button>
          <button className="main-container__links-text" onClick={showModal} name="contact">Contact</button>
          <button className="main-container__links-text" onClick={openPdf} name="resume">Resume</button>
          </div>
          
      </div>
      <About display={display.about} close={hideModal} />
      <Projects display={display.projects} close={hideModal} />
      <Contact display={display.contact} close={hideModal} />
      <Resume display={display.resume} close={hideModal} />
      </div>
    )
}



