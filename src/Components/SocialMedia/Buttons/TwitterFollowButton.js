import React from 'react';
import TwitterIcon from '../../../Images/TwitterIcon.png';
import './SocialMediaButtons.css';

function TwitterFollowButton() {
    return (
        <div class="social-media-follow-btn">
            <a href="https://twitter.com/_SamWells" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Follow Sam Wells on Twitter" />
            </a>
        </div>
    );
}

export default TwitterFollowButton;
