import React from 'react';
import InstagramIcon from '../../../Images/InstaIcon.png';
import './SocialMediaButtons.css';

function InstagramButton() {
    return (
        <div class="social-media-follow-btn">
            <a href="https://www.instagram.com/_samwells95/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Follow Sam Wells on Instagram" />
            </a>
        </div>
    );
}

export default InstagramButton;
