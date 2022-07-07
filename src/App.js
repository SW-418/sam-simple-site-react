import React from 'react';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group'
import sw from './Images/sw.png';
import psychadelic from './Video/psych-compat.mp4'
import psychadelicweb from './Video/psych-compat.webm'
import SocialMediaDeck from './Components/SocialMedia/SocialMediaDeck';

function App() {
  var companyUrl = "https://www.marshmallow.com/";
  return (
    <div className="App">
      <CSSTransitionGroup
        transitionName="video"
        transitionAppear={true}
        transitionAppearTimeout={5000}
        transitionEnter={false}
        transitionLeave={false}>
        <video id="background-video" playsInline="playsinline" loop muted autoPlay="autoplay">
          {/* Different formats required for different browsers */}
          <source src={psychadelic} type="video/mp4"></source>
          <source src={psychadelicweb} type="video/webm"></source>
        </video>
      </CSSTransitionGroup>
      <div id="content">
        <CSSTransitionGroup
          transitionName="welcome-name"
          transitionAppear={true}
          transitionAppearTimeout={5000}
          transitionEnter={false}
          transitionLeave={false}>
          <div id="sw-image">
            <img src={sw} alt="Sam Wells" />
          </div>
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionName="welcome"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>
          <div id="welcome-text">
            <h1> Hi 👋</h1>
            <h1> I'm Sam Wells</h1>
            <h2> Backend Software Engineer with 5+ years of experience 👨🏽‍💻</h2>
            <h2> Currently living in Vancouver, BC, Canada 🇨🇦</h2>
          </div>
        </CSSTransitionGroup>
      </div>
      <SocialMediaDeck />
    </div>
  );
}

export default App;
