import React from 'react';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group'
import sw from './Images/sw.png';
import SocialMediaDeck from './Components/SocialMedia/SocialMediaDeck';

function App() {
  return (
    <div className="App">
      <div id="content">
        <CSSTransitionGroup
          transitionName="welcome-name"
          transitionAppear={true}
          transitionAppearTimeout={3000}
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
            <h2> Backend Software Engineer 👨🏽‍💻</h2>
            <h2> Currently living in Vancouver, BC, Canada 🇨🇦</h2>
          </div>
        </CSSTransitionGroup>
      </div>
      <SocialMediaDeck />
    </div>
  );
}

export default App;
