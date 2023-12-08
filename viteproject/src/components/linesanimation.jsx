import React from 'react';
import '../components/lineanimation.css';


const LineAnimation = () => {
  return (
    <div className="animation-container">
      {Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="line"></div>
      ))}
    </div>
  );
};

export default LineAnimation;
