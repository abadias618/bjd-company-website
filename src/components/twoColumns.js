import React from 'react';
import './twoColumns.css';
import bigLogo from "../images/logo.png";

const TwoColumns = () => {
  return (
    <>
      <div className="grid-container-2" id="about-section">
        <div className="image-column">
          <img src={bigLogo} alt="logo" />
        </div>
        <div className="text-column">
          <h1 className="title">
              <b>About Us</b>
          </h1>
          <p className="description slideUp">
          Welcome to <b>BJD Firm</b>, where we transform business potential into measurable success. As your trusted partner, we specialize in
          innovative solutions designed to help your business scale, streamline, and thrive in today's competitive landscape.

          Our powerhouse team of financial strategists, accounting experts, marketing specialists, and AI innovators delivers
          comprehensive services that propel your business forward. 

          
          </p>
          <div>
            <a href="mailto:info@bjdfirm.com" className="pulsing-text">
              Talk to an Expert for Free
            </a>
          </div>
        </div>
      </div>
      <div className="grid-container-2">
        <div className="text-column">
          <p className="description slideUp">
            Our mission is simple: to unlock opportunities, drive growth, and equip your business with the tools and strategies needed to achieve extraordinary
            results. At <b>BJD Firm</b>, we don't just support your business—we revolutionize it. Let us be the catalyst for your success.
          </p>
        </div>
        <div className="text-column-continuation">
          <p>
            <h1 className="title">
              We excel in:
            </h1>
            <ul>
              <li><b>Data Analysis and Preprocessing</b> - Turning raw data into actionable insights for smarter decision-making.</li>
              <li><b>Natural Language Processing (NLP) Solutions</b> - Enhancing customer interactions with intelligent chatbots, sentiment analysis, and knowledge extraction.</li>
              <li><b>AI-Driven Marketing Solutions</b> - Boosting your marketing impact with advanced analytics and machine learning for precise targeting and automation.</li>
              <li><b>AI for Customer Relationship Management (CRM)</b> - Streamlining customer interactions and support with cutting-edge AI tools.</li>
              <li><b>Financial Planning & Growth Strategies</b> - Securing your financial future through strategic investments and business growth initiatives.</li>
              <li><b>Budgeting & Cash Flow Management</b> - Optimizing your cash flow for improved financial stability and growth.</li>
              <li><b>Financial Statements & Reporting</b> - Providing clear, actionable financial insights for strategic decision-making.</li>
              <li><b>Profitability & Cost Optimization</b> - Maximizing efficiency and profitability through cost-effective strategies and automation.</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default TwoColumns;