import React from "react";
import "./GreetingBanner.css";
import profileImage from "../../images/dr2_transparent_background_v2.png";
import "./WelcomeBanner.css";

const GreetingBanner = () => {
  return (
    <div className="greeting-container text-white">
      <div className="greeting-content-container">
        <div className="greeting-title wow fadeInUp">
          <div>Hello, I’m Dr Sloka.</div>
          <div>I’m here to help you.</div>
        </div>
        <div className="wow fadeInUp">
          <img src={profileImage} width={300} height={300} alt="profile" />
        </div>
      </div>
    </div>
  );
};
export default GreetingBanner;
