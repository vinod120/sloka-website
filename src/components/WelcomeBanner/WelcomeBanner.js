import React from "react";
import OwlCarousel from "react-owl-carousel";
import "./WelcomeBanner.css"; 

const WelcomeBanner = () => {
  return (
    <OwlCarousel
      className="owl-theme header-carousel"
      items={1}
      autoplay={true}
      smartSpeed={500}
      dots={false}
      loop={true}
      nav={true}
      navText={[
        '<i className="bi bi-arrow-left"></i>',
        '<i className="bi bi-arrow-right"></i>'
      ]}
      animateOut="slideOutDown"
    >
      {/* First Carousel Item */}
      <div className="header-carousel-item">
        <img
          src="https://drslokauk.netlify.app/images/header_logo.png"
          className="img-fluid w-100"
          alt="Image"
        />
        <div className="carousel-caption">
          <div className="container align-items-center py-4">
            <div className="row g-5 align-items-center">
              <div
                className="col-xl-7 fadeInLeft animated"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-start ">
                  <h1 className="text-white mb-4 welcome-text-style">
                    Hello, I’m Dr Sloka. I’m here to help you
                  </h1>
                  <p className="mb-4 fs-6 welcome-text-content">
                  Dr. Sloka, a pen name for Dr. Sukesh Krishna Chaitanya Loka, professionally is a Clinical Pharmacologist and a freelance Clinical Psychologist. In short, he is a Med and Mind Mentor! By Passion, he is a poet, artist, writer and now, an author too! Dr. Sloka carries with him over 9+ years of experience in providing Medication Therapy Management services across various specialties such as Allergy and Immunology, Critical Care, General Medicine, Nephrology, Oncology, Organ Transplantation, Pulmonology, and many more of such interesting specialties. He served in various multi-specialty hospitals in India where he played a key role in several clinical and operational projects such as digital prescription, nursing and e-health pharmacy projects.
                  </p>
                  <div className="d-flex flex-shrink-0">
                    <a
                      className="btn btn-primary rounded-pill text-white py-3 px-5"
                      href="#"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 fadeInRight animated"
                style={{ animationDelay: "1s" }}
              >
                <div className="p-5">
                  <img
                    src="https://drslokauk.netlify.app/images/Author-Image-1.png"
                    alt="profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Carousel Item */}
      <div className="header-carousel-item">
        <img
          src="https://drslokauk.netlify.app/images/Author-Image-1.png"
          className="img-fluid w-100"
          alt="Image-text"
        />
        <div className="carousel-caption">
          <div className="container py-4">
            <div className="row g-5 align-items-center">
              <div
                className="col-xl-7 fadeInLeft animated"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-start ">
                  <h1 className="text-white mb-4 welcome-text-style">
                    Hello, I’m Dr Sloka. I’m here to help you.
                  </h1>
                  <p className="mb-4 fs-6 welcome-text-content">
                  Dr. Sloka, a pen name for Dr. Sukesh Krishna Chaitanya Loka, professionally is a Clinical Pharmacologist and a freelance Clinical Psychologist. In short, he is a Med and Mind Mentor! By Passion, he is a poet, artist, writer and now, an author too! Dr. Sloka carries with him over 9+ years of experience in providing Medication Therapy Management services across various specialties such as Allergy and Immunology, Critical Care, General Medicine, Nephrology, Oncology, Organ Transplantation, Pulmonology, and many more of such interesting specialties. He served in various multi-specialty hospitals in India where he played a key role in several clinical and operational projects such as digital prescription, nursing and e-health pharmacy projects.
                  </p>
                  <div className="d-flex flex-shrink-0">
                    <a
                      className="btn btn-primary rounded-pill text-white py-3 px-5"
                      href="#"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 fadeInRight animated"
                style={{ animationDelay: "1s" }}
              >
                <div className="p-5">
                  <img
                    src="https://drslokauk.netlify.app/images/header_logo.png"
                    style={{ opacity: "0.5" }}
                    alt="profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default WelcomeBanner;
