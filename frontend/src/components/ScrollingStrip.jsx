// components/ScrollingStrip.jsx
import React from 'react';
import '../styles/ScrollingStrip.css';

const offerings = [
  { label: 'PM Surya Ghar Yojana', url: 'https://pmsuryaghar.gov.in/#/' },
  { label: 'PM KUSUM Scheme', url: 'https://pmkusum.mnre.gov.in/#/landing' },
  { label: 'MNRE for SOLAR', url: 'https://mnre.gov.in/en/solar/' },
   { label: 'Subsidy for SURYA GHAR', url: 'https://pmsuryaghar.in/solar-system-price-with-subsidy-in-rajasthan/' },
];

const ScrollingStrip = () => {
  const duplicateContent = [...offerings, ...offerings]; // duplicate for smooth loop

  return (
    <div className="strip-container">
      <div className="strip-content">
        {duplicateContent.map((item, index) => (
          <span 
            key={index} 
            className="strip-item"
            onClick={() => window.open(item.url, '_blank')}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingStrip;
