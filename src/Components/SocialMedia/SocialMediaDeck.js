import React from 'react';
import TwitterFollowButton from './Buttons/TwitterFollowButton';
import InstagramButton from './Buttons/InstagramButton';
import LinkedInButton from './Buttons/LinkedInButton';
import './SocialMediaDeck.css';

function SocialMediaDeck() {

  return (
    <div id="social-media-deck">
        <TwitterFollowButton/>
        <InstagramButton/>
        <LinkedInButton/>
    </div>
  );
}

export default SocialMediaDeck;
