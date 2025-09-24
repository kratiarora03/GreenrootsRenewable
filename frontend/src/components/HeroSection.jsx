// components/HeroSection.jsx
import React from 'react';
import '../styles/hero.css';
import hero3 from '../assets/main/trial.png';  // make sure this file exists
import ScrollingStrip from './ScrollingStrip'; // ✅ Added import

const HeroSection = () => {
  return (
    <div id="home" className="hero-carousel">
      <ScrollingStrip />
      <div className="hero-slide">
        <img 
          src={hero3} 
          alt="Hero 3" 
          loading="eager"   // better for hero images
          decoding="async"  // improves rendering speed
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default HeroSection; 
