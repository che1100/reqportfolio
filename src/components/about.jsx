import React from 'react';
import './about.css'; // We'll create this for styling
import profilepic from '../assets/profile.png';

const AboutSection = () => {
  return (
    <section className='about-section' id="about">
      <h1 className='about-title'>About Me</h1>
      <div className='about-container'>
        <div className='profilepic-con'>
          <img src={profilepic} alt='cherrie' className='dp' />
        </div>
        <div className='second-column'>
          <h1>Hello!</h1>
          <div>
            <p>My name is Cherrie, a passionate Front-End Developer with a keen eye for design and a love for creating user-friendly web applications. I specialize in HTML, CSS, and JavaScript, and I'm always eager to learn new technologies to enhance my skills.</p>
            <p>Currently, I am pursuing a Bachelor of Science in Information Technology at Holy Cross of Davao College, where I am honing my technical skills and gaining practical experience through various projects.</p>
            <h1>EDUCATION</h1>
            <div className='education-info'>
              <h3>Holy Cross of Davao College</h3>
              <h2>BS Information Technology</h2>
              <h2>2024-2025</h2>
            </div>
          </div>
        </div>
        <div className='last-column'>          
          <h1>SKILLS</h1>
          <div className="skills-container">
            <div className="skills-column">
              <h3>Front-End</h3>
              <div className="skills-row">
                <span className="skill-item">HTML</span>
                <span className="skill-item">CSS</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">React</span>
              </div>
              <div className="skills-row">
              </div>
            </div>
            <div className="skills-column">
              <h3>UX/UI</h3>
              <div className="skills-row">
                <span className="skill-item">Wordpress</span>
                <span className="skill-item">Figma</span>
                <span className="skill-item">Canva</span>
              </div>
            </div>
            <div className="skills-column">
              <h3>Others</h3>
              <div className="skills-row">
                <span className="skill-item">MS Office</span>
                <span className="skill-item">Adobe Photoshop</span>
                <span className="skill-item">Adobe Illustrator</span>
                <span className="skill-item">Computer Hardware</span>
                <span className="skill-item">Data Analytics</span>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
