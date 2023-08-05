import React from 'react';
import './LoadingScreen.css'; // Create this CSS file to style your loading screen
import LoadingImage from '../assets/loadingIcon.png'

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <img src={LoadingImage} width={70} />
        <p style={{ color: "white", fontFamily: "Jost", fontSize: "20px", marginBottom: "10px"}}>Excellence is always our expectation.</p>
        <div class="progress">
          <div class="progress-value"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
