import React, { useEffect, useState } from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="social-links">
          <a 
            href="mailto:your.email@example.com" 
            aria-label="Email"
            className="social-link"
          >
            <FaEnvelope />
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <FaLinkedin />
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