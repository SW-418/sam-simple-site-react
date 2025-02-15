import React from 'react';
import InstagramButton from './Buttons/InstagramButton';
import LinkedInButton from './Buttons/LinkedInButton';
import './SocialMediaDeck.css';

function SocialMediaDeck() {

  return (
    <div id="social-media-deck">
        <InstagramButton/>
        <LinkedInButton/>
    </div>
  );
}

export default SocialMediaDeck;
