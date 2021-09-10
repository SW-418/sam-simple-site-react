import React from 'react';
import LinkedInIcon from '../../../Images/LinkedInIcon.png';
import './SocialMediaButtons.css';

function LinkedInButton() {
    return (
        <div class="social-media-follow-btn">
            <a href="https://www.linkedin.com/in/sw-418/">
                <img src={LinkedInIcon} alt="Connect with Sam Wells on LinkedIn" />
            </a>
        </div>
    );
}

export default LinkedInButton;
