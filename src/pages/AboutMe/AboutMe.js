import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img
          src="https://placehold.co/600x400"
          alt="About Me"
          decoding="async"
          loading="lazy"
        />
      </div>
      <div className="about-text">
        <div className="about-title">
          He is a Med and Mind Mentor! By Passion, he is a poet, artist, writer
          and now, an author too!
        </div>
        <div className="about-text-content">
          <p>
            Dr. Sloka, a pen name for Dr. Sukesh Krishna Chaitanya Loka,
            professionally is a Clinical Pharmacologist and a freelance Clinical
            Psychologist. In short, he is a Med and Mind Mentor! By Passion, he
            is a poet, artist, writer and now, an author too!
          </p>
          <p>
            Dr. Sloka carries with him over 9+ years of experience in providing
            Medication Therapy Management services across various specialties
            such as Allergy and Immunology, Critical Care, General Medicine,
            Nephrology, Oncology, Organ Transplantation, Pulmonology, and many
            more of such interesting specialties. He served in various
            multi-specialty hospitals in India where he played a key role in
            several clinical and operational projects such as digital
            prescription, nursing and e-health pharmacy projects.
          </p>
          <p>
            He is a medical trainer, and had trained over hundreds of healthcare
            professionals including consultants, junior doctors, medicos,
            nurses, pharmacists, and was also the faculty member for the
            students of MBA- Hospital and Healthcare Management at Krishna
            Institute of Medical Sciences, one of the study centres of Dr B. R.
            Ambedkar Open University.
          </p>
          <p>
            He underwent a course of Mindfulness Based Cognitive Therapy (MBCT)
            by the TEWV NHS foundation trust, and Suicide Prevention by the “If
            u care share” foundation in the United Kingdom. He was also trained
            in Cognitive Behavioral Therapy (CBT), self-compassion, HIV
            Counselling, arts therapy, and psychosexual therapy.
          </p>
          <p>
            Dr. Sloka has worked with clients facing an array of mental health
            challenges, including anxiety, depression, panic attacks, and
            obsessive-compulsive disorder (OCD), stress, relationship
            difficulties, and sexual issues and many others.
          </p>
          <p>
            In addition to his clinical work, his research in the realm of
            mental health is both extensive and varied. Notably, he has delved
            into the impact of managerial personalities on the job satisfaction
            of employees in the workplace. This exploration illustrates his
            commitment to fostering healthier and more harmonious work
            environments. Dr. Sloka has also presented numerous lectures on the
            subject of mental health, further contributing to the awareness on
            mental well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
