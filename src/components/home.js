
import React from 'react';
import "../css/home.scss";
import { useState } from 'react';



function Home() {

    const [display, updateDisplay] = useState({
        about:'',
        projects: '',
        contact: '',
        resume: ''
      })
    
      function displayModal (){
          updateDisplay = ({

          })
      }

    return (
        <div className="main-container">
          <h1 className="main-container__title-primary">Jake Januszanis</h1>
          <h2 className="main-container__title-sub">Full Stack Web Developer</h2>
          <div className="divider"></div>
          <div className="main-container__links">
          <button className="main-container__links-text" onClick={displayModal}>About</button>
          <button className="main-container__links-text">Projects</button>
          <button className="main-container__links-text">Contact</button>
          <button className="main-container__links-text">Resume</button>
          </div>
      </div>
    )
}

export default Home;