import React from 'react';
import './parallax.css';

const Parallax = ({ imageSrc, text }) => {
  console.log("imageSrc",imageSrc)
  return (
    <div className="parallax-container">
      <div className="parallax-image" style={{ backgroundImage: `url(${imageSrc})` }}></div>
      <div className="parallax-text">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Parallax;