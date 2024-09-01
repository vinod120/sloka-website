import React from "react";
import "./Disclaimer.css";

const Disclaimer = () => {
  return (
    <div className="disclaimer-container">
      <div className="disclaimer-content">
        <span className="disclaimer-icon">⚠️</span>
        <p className="disclaimer-text">
          Please be informed that{" "}
          <strong>Dr Sloka doesn’t provide crisis intervention services. </strong>
           If you or someone you know are in crisis, please reach out
          to your nearest hospital or your local mental health helplines for
          immediate attention but <strong>do not suffer in silence!</strong>
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
