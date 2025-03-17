import React, { useState, useEffect } from 'react';
import './grid.css';
import wallBW from "../images/wall-bw-alt-bg.png";

const GridLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      // Initial check
      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Clean up event listener
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  return (
    <div className={`grid-container ${isMobile ? 'mobile' : ''}`}> 
      <div className="left-top">
        <h2 className="slideUp">
          Welcome to
          <br/>
          <span className="company-name">Bradford, Jensen & Dominguez</span>
          <br/>
          Where innovation meets expertise.
        </h2>
        <p className='company-description'>
          We provide FinTech AI Solutions that transform the way businesses operate, with a combination of&nbsp;
          <span className='bolder'>financial precision, marketing innovation, AI automation, accounting expertise</span>
          &nbsp;and much more.
          Our solutions streamline processes, optimize performance, and let you <span className='underline'>focus on scaling your business with confidence.</span>
        </p>
        <a href="mailto:info@bjdfirm.com" className="email-button">
          Contact Us
        </a>
      </div>

      <div className="right">
        <div className="image-container">
          <img 
            src={wallBW} 
            alt="wall"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;