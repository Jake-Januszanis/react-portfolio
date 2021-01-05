
import React from 'react';
import "../css/home.scss"


function Home() {

    return (
        <div className="main-container">
          <h1 className="main-container__title-primary">Jake Januszanis</h1>
          <h2 className="main-container__title-sub">Full Stack Web Developer</h2>
          <div className="divider"></div>
          <div className="main-container__links">
          <span className="main-container__links-text">Projects</span>
          <span className="main-container__links-text">About</span>
          <span className="main-container__links-text">Contact</span>
          <span className="main-container__links-text">Resume</span>
          </div>
      </div>
    )
}

export default Home;