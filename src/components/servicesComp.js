import React, { useState } from 'react';
import './servicesComp.css';
import { motion } from 'framer-motion';

import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import b4 from "../images/b4.jpg";

const services = [
  {
    id: 1,
    title: "Financial Analysis",
    image: b1,
    description: "Comprehensive financial analysis and reporting to drive informed business decisions.",
    detailedDescription: "Our financial analysis service provides deep insights into your company's financial health, identifying opportunities for growth, cost reduction, and strategic investment.",
    icon: "💹",
    link:"/services/marketing"
  },

  {
    id: 2,
    title: "AI Solutions",
    image: b2,
    description: "Custom AI implementations to automate and optimize your business processes.",
    icon: "🤖",
    link:"/services/ai"
  },
  {
    id: 3,
    title: "Digital Marketing",
    image: b3,
    description: "Strategic digital marketing solutions to boost your online presence.",
    detailedDescription:"Developing and implementing AI-driven marketing strategies to optimize campaigns, personalize customer experiences, and enhance decision-making processes.",
    icon: "📱",
    link:"/services/marketing"
  },
  {
    id: 4,
    title: "Data Analytics",
    image: b4,
    description: "Advanced data analytics to uncover insights and drive growth.",
    icon: "📊",
    link:"/services/marketing"
  },
];

const ServicesComp = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="services-container">
      <motion.h1 
        className="services-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h1>
      
      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service) => (
          <motion.div 
            key={service.id}
            className={`service-card ${flippedCard === service.id ? 'flipped' : ''}`}
            variants={cardVariants}
            onHoverStart={() => setFlippedCard(service.id)}
            onHoverEnd={() => setFlippedCard(null)}
          >
            <div className="card-inner">
              {/* Front of the card */}
              <div className="card-front">
                <div className="image-container-card">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="service-icon">{service.icon}</span>
                </div>
                
                <motion.h2 className="service-title">
                  {service.title}
                </motion.h2>
                
                <motion.p className="service-description">
                  {service.description}
                </motion.p>
              </div>

              {/* Back of the card */}
              <div className="card-back">
                <motion.h2 className="service-title">
                  {service.title}
                </motion.h2>
                
                <motion.p className="service-detailed-description">
                  {service.detailedDescription}
                </motion.p>
                
                <motion.button 
                  className="learn-more-btn"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "#007bff",
                    color: "white"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={service.link} style={{all: `unset`}}>Learn More</a>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesComp;