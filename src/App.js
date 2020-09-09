import React from 'react';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group'
import sw from './Images/sw.png';
import SocialMediaDeck from './Components/SocialMedia/SocialMediaDeck';

function App() {

  var jeUrl = "https://www.just-eat.co.uk";

  return (
    <div className="App">
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
            <h2> Backend Software Engineer at <a href={jeUrl}>Just Eat</a></h2>
          </div>
        </CSSTransitionGroup>
      </div>
      <SocialMediaDeck/>
    </div>
  );
}

export default App;
