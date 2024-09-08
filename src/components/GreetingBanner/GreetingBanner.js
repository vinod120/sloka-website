import React from "react";
import "./GreetingBanner.css";

const GreetingBanner = () => {
  return (
    <div className="greeting-container">
      <div className="greeting-title">
        <div>
        <div>Hello, I’m Dr Sloka.</div>
        <div>I’m here to help you.</div>
        </div>
        
        <img src="/images/welcome_sloka_img.png"  className="welcome-img" width={500} height={650}/>
      </div>
    </div>
  );
};

export default GreetingBanner;
