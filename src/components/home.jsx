import React, { useEffect, useState } from 'react';
import './home.css';
import me from '../assets/me.png';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);

 useEffect(() => {
  const titles = ["Front-End Developer", "UI/UX Designer"];
  const currentText = titles[currentTitle];

  let timeout;

  if (!isDeleting && currentIndex < currentText.length) {
    // Typing
    timeout = setTimeout(() => {
      setDisplayText(currentText.substring(0, currentIndex + 1));
      setCurrentIndex(prev => prev + 1);
    }, 100);
  } else if (isDeleting && currentIndex > 0) {
    // Deleting
    timeout = setTimeout(() => {
      setDisplayText(currentText.substring(0, currentIndex - 1));
      setCurrentIndex(prev => prev - 1);
    }, 50);
  } else {
    // Pause before switching direction
    timeout = setTimeout(() => {
      if (!isDeleting) {
        setIsDeleting(true);
      } else {
        setIsDeleting(false);
        setCurrentTitle((prev) => (prev + 1) % titles.length);
      }
    }, 1000); // Pause duration
  }

  return () => clearTimeout(timeout);
}, [currentIndex, isDeleting, currentTitle]);


  return (
    <section id="home" className="home-section">
      <div className="home__img">
        <img src={me} alt="Cherrie" className="home__profile-pic" />
      </div>
      <div className="home-content">
        <div className="home__text">
          <h1>Hi I'm Cherrie <br />
            <span className="home__title-color">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </h1>
          <p>Crafting beautiful and functional websites tailored to your vision.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
