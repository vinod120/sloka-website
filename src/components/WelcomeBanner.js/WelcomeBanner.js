import React from "react";
import "./WelcomeBanner.css";

const WelcomeBanner = () => {
  return (
    <div className="welcome-container">
      <h1 className="mb-20">Welcome</h1>
      <div className="welcome-content">
        <strong>Dr. Sloka</strong>, a pen name for Dr. Sukesh Krishna Chaitanya Loka,
        professionally is a Clinical Pharmacologist and a freelance Clinical
        Psychologist. In short, he is a <strong>Med and Mind Mentor!</strong> By Passion, he is a
        poet, artist, writer and now, an author too! Dr. Sloka carries with him
        over 9+ years of experience in providing Medication Therapy Management
        services across various specialties such as Allergy and Immunology,
        Critical Care, General Medicine, Nephrology, Oncology, Organ
        Transplantation, Pulmonology, and many more of such interesting
        specialties. He served in various multi-specialty hospitals in India
        where he played a key role in several clinical and operational projects
        such as digital prescription, nursing and e-health pharmacy projects.
      </div>
    </div>
  );
};

export default WelcomeBanner;
