import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './oneService.css';

// Icons (you can replace with your own)
import { 
  FaChartLine, 
  FaCode, 
  FaChartPie, 
  FaLightbulb 
} from 'react-icons/fa';

const OneService = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const serviceDetails = {
    title: "AI-Powered Financial Analytics",
    subtitle: "Transforming Data into Strategic Insights",
    overview: "A comprehensive solution that leverages artificial intelligence to provide deep financial insights and predictive analytics.",
    features: [
      {
        icon: <FaChartLine />,
        title: "Real-time Financial Tracking",
        description: "Instant monitoring of financial metrics with AI-driven insights."
      },
      {
        icon: <FaCode />,
        title: "Advanced Predictive Modeling",
        description: "Machine learning algorithms that forecast financial trends."
      },
      {
        icon: <FaChartPie />,
        title: "Comprehensive Reporting",
        description: "Detailed, customizable financial reports and dashboards."
      },
      {
        icon: <FaLightbulb />,
        title: "Strategic Recommendations",
        description: "AI-generated actionable insights for business growth."
      }
    ],
    pricing: [
      { tier: "Basic", price: "$499/month", features: ["Core Analytics", "Monthly Reports"] },
      { tier: "Pro", price: "$999/month", features: ["Advanced Analytics", "Weekly Reports", "Custom Dashboards"] },
      { tier: "Enterprise", price: "Custom", features: ["Full Suite", "Real-time Monitoring", "Dedicated Support"] }
    ]
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 120 
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100 
      }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return (
          <motion.div 
            key="overview"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="service-overview"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {serviceDetails.overview}
            </motion.p>
            <div className="feature-grid">
              {serviceDetails.features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-item"
                  variants={featureVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 'pricing':
        return (
          <motion.div 
            key="pricing"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="pricing-section"
          >
            <div className="pricing-grid">
              {serviceDetails.pricing.map((plan, index) => (
                <motion.div 
                  key={index}
                  className="pricing-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100 
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                  }}
                >
                  <h3>{plan.tier}</h3>
                  <div className="price">{plan.price}</div>
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Choose Plan
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="service-detail-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="service-card-single-service">
        <motion.div 
          className="service-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1>{serviceDetails.title}</h1>
          <h2>{serviceDetails.subtitle}</h2>
        </motion.div>

        <div className="section-navigation">
          <motion.button
            onClick={() => setActiveSection('overview')}
            className={activeSection === 'overview' ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Overview
          </motion.button>
          <motion.button
            onClick={() => setActiveSection('pricing')}
            className={activeSection === 'pricing' ? 'active' : ''}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Pricing
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {renderSection()}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default OneService;