import React from 'react';
import './footer.css';
import { FaGithub, FaEnvelope, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="social-links">
          <a 
            href="mailto:pcherrieanne@gmail.com" 
            aria-label="Email"
            className="social-link"
          >
            <FaEnvelope />
          </a>
          <a 
            href="https://github.com/che1100.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a 
            href="https://facebook.com/cherrie.paclibar/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social-link"
          >
            <FaFacebook />
          </a>
        </div>
        <p className="copyright">
          &copy; {currentYear} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;