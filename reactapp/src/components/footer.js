import React from 'react';
import { Link } from 'react-router-dom';
// Import your custom social media icons
import facebookIcon from '../assets/images/facebook.png';
import twitterIcon from '../assets/images/twitter.png';
import instagramIcon from '../assets/images/instagram.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-pvt">
        <Link to="/privacy"><p>&copy; {new Date().getFullYear()} VoteEase Pvt.</p></Link>
      </div>
      
      <div className="footer-text">
        <Link to="/terms">Terms & Conditions</Link>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        {/* Add more social media links/icons as needed */}
      </div>
    </footer>
  );
};

export default Footer;
