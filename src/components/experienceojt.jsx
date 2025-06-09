import React from "react";
import { FaCalendarAlt, FaTasks, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import ojtcert from '../assets/ojtcpic.jpg';
import "./experience.css";

const Experience = () => {
  const ojt = {
    position: "SPLACE BPO",
    period: "March 2025 - June 2025",
    duration: "486 hours",
    description: [
      "Gained hands-on experience in IT support tasks, including troubleshooting hardware/software issues and assisting with user support.",
      "Participated in inventory management, including tagging, auditing, and maintaining accurate hardware records.",
      "Practiced cable management and workstation setup, emphasizing the importance of physical organization and safety.",
      "Assisted in internal tool development, scripting, and deployment processes, improving technical and problem-solving skills.",
      "Learned the value of structured documentation and communication for efficient IT operations and knowledge sharing."
    ],
    skills: ["Inventory & Asset Management", "Cable Management & Network Setup", "System Deployment & Configuration", "Time Management", "Team Collaboration"]
  };

  return (
    <section className="ojt-section">
      <div className="ojt-container">
        <div className="ojt-content">
          <h2 className="ojt-title">
            <FaLaptopCode className="title-icon" /> On-the-Job Training

          </h2>
          
          <div className="ojt-details">
            <div className="ojt-text">
              <h3 className="ojt-position">{ojt.position}</h3>
              <p className="ojt-company">{ojt.company}</p>
              
              <div className="ojt-meta">
                <p className="meta-item">
                  <FaCalendarAlt className="meta-icon" /> {ojt.period}
                </p>
                <p className="meta-item">
                  <FaGraduationCap className="meta-icon" /> {ojt.school}
                </p>
                <p className="meta-item duration-badge">{ojt.duration}</p>
              </div>
              
              <div className="ojt-description">
                <h4 className="description-title">
                  <FaTasks className="description-icon" /> Key Responsibilities:
                </h4>
                <ul className="responsibilities-list">
                  {ojt.description.map((item, index) => (
                    <li key={index} className="responsibility-item">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="ojt-skills">
                <h4 className="skills-title">Skills Gained:</h4>
                <div className="skills-list">
                  {ojt.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="ojt-image-wrapper">
              <img 
                src={ojtcert} 
                alt="OJT Experience" 
                className="ojt-image" 
              />
              <div className="image-overlay"></div>
              <div className="image-caption">OJT Certificate{ojt.company}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;