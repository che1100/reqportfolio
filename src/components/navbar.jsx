import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">

      <nav className="navbar-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#certificates">Certificate</a></li>
          <li><a href="#experienceojt">Experience</a></li>
          <li><a href="#contact">Contact</a></li>

          <li>
            <a href="/cv.pdf" download className="resume-button">
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
