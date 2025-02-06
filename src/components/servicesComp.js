import React from 'react';
import './servicesComp.css';
import { motion } from 'framer-motion'; // For better animations

const services = [
  {
    id: 1,
    title: "Financial Analysis",
    image: "/path-to-your-image/financial.png",
    description: "Comprehensive financial analysis and reporting to drive informed business decisions.",
    icon: "💹"
  },
  {
    id: 2,
    title: "AI Solutions",
    image: "/path-to-your-image/ai.png",
    description: "Custom AI implementations to automate and optimize your business processes.",
    icon: "🤖"
  },
  {
    id: 3,
    title: "Digital Marketing",
    image: "/path-to-your-image/marketing.png",
    description: "Strategic digital marketing solutions to boost your online presence.",
    icon: "📱"
  },
  {
    id: 4,
    title: "Data Analytics",
    image: "/path-to-your-image/analytics.png",
    description: "Advanced data analytics to uncover insights and drive growth.",
    icon: "📊"
  },
  // Add more services as needed
];

const ServicesComp = () => {
  // Animation variants for Framer Motion
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
            className="service-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <div className="card-content">
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
              
              <motion.h2 
                className="service-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {service.title}
              </motion.h2>
              
              <motion.p 
                className="service-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {service.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesComp;