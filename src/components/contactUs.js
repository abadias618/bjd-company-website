import React from 'react';
import './contactUs.css';
import backgroundImage from "../images/wall-bw.jpg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-info-container">
      <div className="image-overlay-text">
        <img src={backgroundImage} alt="background" className="background-image" />
        <div className="info-container">
          <h2 className="title">Contact Us</h2>
          
          <div className="info-grid">
            {/* Email Section */}
            <div className="info-card">
              <div className="icon-wrapper">
                <FaEnvelope className="icon" />
              </div>
              <h3>Email Us</h3>
              <a href="mailto:info@example.com" className="info-text">
                info@example.com
              </a>
              <a href="mailto:support@example.com" className="info-text">
                support@example.com
              </a>
            </div>

            {/* Phone Section */}
            <div className="info-card">
              <div className="icon-wrapper">
                <FaPhone className="icon" />
              </div>
              <h3>Call Us</h3>
              <a href="tel:+1234567890" className="info-text">
                +1 (234) 567-890
              </a>
              <a href="tel:+1234567890" className="info-text">
                +1 (234) 567-891
              </a>
            </div>

            {/* Hours Section */}
            <div className="info-card">
              <div className="icon-wrapper">
                <FaClock className="icon" />
              </div>
              <h3>Business Hours</h3>
              <p className="info-text">
                Monday - Friday<br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;