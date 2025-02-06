import React from 'react';
import './twoColumns.css';
import bigLogo from "../images/logo.png";

const TwoColumns = () => {
  return (
    <div className="grid-container-2" id="about-section">
      <div className="image-column">
        <img src={bigLogo} alt="logo" />
      </div>
      <div className="text-column">
        <h1 className="title">
            <b>About Us</b>
        </h1>
        <p className="description slideUp">
            Welcome, here we can help you transform your business potential 
            into measurable success. As your trusted partner, we specialize in delivering dynamic solutions that empower 
            businesses to scale, streamline, and thrive. With a powerhouse team of financial strategists, accounting experts, 
            marketing specialists, and AI innovators, we provide comprehensive services tailored to elevate your business in 
            today's competitive landscape.

            Our mission is simple: to unlock opportunities, drive growth, and equip your business with the tools and strategies 
            it needs to achieve extraordinary results. At [BJD Firm], we don't just support your business—we 
            revolutionize it. Let us be the catalyst for your success.
        </p>
        <div>
          <a href="mailto:info@bjdfirm.com">
            Send us an email.
          </a>
        </div>
      </div>
    </div>
  );
};

export default TwoColumns;