import React from 'react';
import './portfolio.css';
import sample1 from '../assets/one.png';
import sample2 from '../assets/two.png';
import sample3 from '../assets/three.png';

const portfolioItems = [
  {
    id: 1,
    title: 'Al-noor Rental Management System',
    description: 'A rental management system that automates tenant tracking, rent payments, and record-keeping, ensuring efficiency, accuracy, and transparency for both tenants and management.',
    image: sample1,
  },
  {
    id: 2,
    title: 'Course Recommendation System',
    description: 'An AI-based course recommendation system that suggests personalized courses to students based on their interests, performance, and learning goals using machine learning algorithms.',
    image: sample2,
  },
  {
    id: 3,
    title: 'CT Express',
    description: 'A capstone project that A mobile app designed for Calinan Terminal that streamlines commuter experience by automating priority number issuance, enabling online payments, and providing real-time tracking of L300 vehicle locations.',
    image: sample3,
  },
];

const PortfolioCards = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title">My Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <div className="portfolio-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioCards;
