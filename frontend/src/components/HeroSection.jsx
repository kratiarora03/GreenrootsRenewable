// components/HeroCarousel.jsx
import React from 'react';
import '../styles/hero.css';
import hero3 from '../assets/main/trial.png';
import ScrollingStrip from './ScrollingStrip'; // Import scrolling strip

const HeroCarousel = () => {
  return (
    <div id="home" className="hero-carousel">
      <ScrollingStrip />
      <div className="hero-slide">
        <img 
          src={hero3} 
          alt="Hero 3" 
          loading="lazy" 
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
