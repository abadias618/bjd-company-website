import React, { useState, useEffect } from 'react';
import './grid.css';
import wallBW from "../images/wall-bw.jpg";
// Carousel Images
import adobeLogo from "../images/Adobe-Creative-Cloud-Logo-PNG.png";
import davinciLogo from "../images/davinci.png";
import sonyLogo from "../images/sony.png";
import powerbiLogo from "../images/power_bi.png";
import analyticsLogo from "../images/analytics.png";
import tableauLogo from "../images/tableau.png";
import lookerLogo from "../images/looker.png";
import excelLogo from "../images/excel.png";
import quickbooksLogo from "../images/quickbooks.png";
import tfLogo from "../images/tf.png";
import openaiLogo from "../images/openai.png";

const GridLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliding, setSliding] = useState(false);
  
  const carouselItems = [
    adobeLogo,
    davinciLogo,
    sonyLogo,
    powerbiLogo,
    analyticsLogo,
    tableauLogo,
    lookerLogo,
    excelLogo,
    quickbooksLogo,
    tfLogo,
    openaiLogo,

  ];
  const carouselItemsText = [
    "Adobe Creative Cloud",
    "Davinci Resolve",
    "FX3 Format Shot Ads",
    "Power BI",
    "Google Analytics",
    "Tableau",
    "Looker",
    "Microsoft Excel",
    "QuickBooks",
    "Tensorflow",
    "OpenAI Models"
  ];
  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setSliding('slide-left');
    setTimeout(() => {
      setCurrentSlide((prev) => 
        prev === carouselItems.length - 1 ? 0 : prev + 1
      );
      setSliding(false);
    }, 1000); // Match this with CSS animation duration
  };

  const prevSlide = () => {
    setSliding('slide-right');
    setTimeout(() => {
      setCurrentSlide((prev) => 
        prev === 0 ? carouselItems.length - 1 : prev - 1
      );
      setSliding(false);
    }, 1000); // Match this with CSS animation duration
  };
  
  return (
    <div className="grid-container">
      <div className="left-top">
        <h2 className="slideUp">
          Welcome to
          <br/>
          <h1 className="company-name">Bradford, Jensen & Dominguez</h1>
          <br/>
          Where innovation meets expertise.
        </h2>
        <p className='company-description'>
          We provide FinTech AI Solutions that transform the way businesses operate, with a combination of&nbsp;
          <span className='bolder'>financial precision, marketing innovation, AI automation, accounting expertise</span>
          &nbsp;and much more.
          Our solutions streamline processes, optimize performance, and let you <span className='underline'>focus on scaling your business with confidence.</span>
        </p>
        <a href="mailto:info@bjdfirm.com" class="email-button">
          Contact Us
        </a>
      </div>
      
      <div className="left-bottom">
        <div className="carousel">
          <button onClick={prevSlide} disabled={sliding}>&lt;</button>
          <div className="carousel-viewport">
            <div className={`carousel-content ${sliding}`}>
              <div>
                <img src={carouselItems[currentSlide]} height="100px" alt="carousel-logo"/>
                <span className='carousel-text'>
                  {carouselItemsText[currentSlide]}
                </span>
              </div>
            </div>
          </div>
          <button onClick={nextSlide} disabled={sliding}>&gt;</button>
        </div>
      </div>

      <div className="right">
        <div className="image-container">
          <img 
            src={wallBW} 
            alt="wall"
          />
          <div className="image-overlay">
            <p>We combine creativity, data, and AI to drive successful results.</p>
            <p>Let's grow your business with technology-driven marketing solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;