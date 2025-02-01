import React, { useState, useEffect } from 'react';
import './background.css';

const BackgroundShift = ({ children }) => {
    const [isShifted, setIsShifted] = useState(false);
  
    useEffect(() => {
      const colorShiftTimeout = setTimeout(() => {
        setIsShifted(true);
      }, 500);
  
      return () => clearTimeout(colorShiftTimeout);
    }, []);
  
    return (
      <div
        className={`background-shift ${isShifted ? 'shifted' : ''}`}
      >
        {children}
      </div>
    );
  };
  
  export default BackgroundShift;