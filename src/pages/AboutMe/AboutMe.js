import { useEffect } from "react";
import "./AboutMe.css";

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])
  return (
    <div className="container-fluid p-5">
      <div className="about-title">
        <p className="fadeInLeft animated mb-0">He is a Med and Mind Mentor! By Passion,</p>
        <p className="fadeInRight animated mb-0"> he is a poet, artist, writer
          and now, an author too!</p>
      </div>
      <div className="about-page-content-wrapper">
        <div className="about-image about-top-img fadeInLeft animated">
          <img
            src="/images/about_sloka_img.png"
            width={"500"}
            alt="About Me"
            className="m-auto"
            decoding="async"
            loading="lazy"
          />
        </div>
        <div className="about-text fadeInRight animated">
          <div className="about-text-content">
            <p>
              Sri Gowri, a pen name for Dr. Sukesh Krishna Chaitanya Loka,
              professionally is a Clinical Pharmacologist and a freelance Clinical
              Psychologist. In short, he is a Med and Mind Mentor! By Passion, he
              is a poet, artist, writer and now, an author too!
            </p>
            <p>
              Sri Gowri carries with him over 9+ years of experience in providing
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
          </div>
        </div>
      </div>
      <div className="about-page-content-wrapper about-page-content-wrapper2">
        <div className="about-text fadeInLeft animated">
          <div className="about-text-content">
            <p>
              He underwent a course of Mindfulness Based Cognitive Therapy (MBCT)
              by the TEWV NHS foundation trust, and Suicide Prevention by the “If
              u care share” foundation in the United Kingdom. He was also trained
              in Cognitive Behavioral Therapy (CBT), self-compassion, HIV
              Counselling, arts therapy, and psychosexual therapy.
            </p>
            <p>
              Sri Gowri has worked with clients facing an array of mental health
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
              environments. Sri Gowri has also presented numerous lectures on the
              subject of mental health, further contributing to the awareness on
              mental well-being.
            </p>
          </div>
        </div>
        <div className="about-image fadeInRight animated">
          <img
            src="/images/Author-Image-1.png"
            width={"100%"}
            alt="About Me"
            decoding="async"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
