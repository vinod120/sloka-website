import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "./WelcomeBanner.css";
import { Link } from "react-router-dom";

const WelcomeBanner = () => {
  return (
    <Swiper
      className="header-carousel"
      modules={[Navigation, Autoplay, EffectFade]}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      }}
      loop={true}
      effect="fade"
    >
      {/* First Carousel Item */}
      <SwiperSlide>
        <div className="header-carousel-item">
          <img
            src="https://drslokauk.netlify.app/images/header_logo.png"
            className="img-fluid w-100"
            alt="welcome-banner"
          />
          <div className="carousel-caption">
            <div className="container align-items-center py-4">
              <div className="row g-5 align-items-center">
                <div
                  className="col-xl-7 fadeInLeft animated"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-start">
                    <h1 className="text-white mb-4 welcome-text-style">
                      Hello, I’m Dr Sloka. I’m here to help you
                    </h1>
                    <p className="mb-4 fs-6 welcome-text-content">
                      Dr. Sloka, (a pen name for Dr. Sukesh Krishna Chaitanya
                      Loka), professionally is a Clinical Pharmacologist, a
                      freelance Clinical Psychologist and a Medical Trainer. In
                      short, he is a Med and Mind Mentor! By Passion, he is a
                      poet, an artist, a writer and an author too! <br />If your
                      struggle is in the mind, remember that your recovery is
                      also within your mind. Dr. Sloka guides you through the
                      recovery process!
                    </p>
                    <div className="d-flex flex-shrink-0">
                      <Link
                        to="/about"
                        className="btn btn-primary rounded-pill text-white py-3 px-5"
                      >
                        Read more
                      </Link>
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
                      alt="welcome-banner-profile"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Second Carousel Item */}
      <SwiperSlide>
        <div className="header-carousel-item">
          <img
            src="https://drslokauk.netlify.app/images/Author-Image-1.png"
            className="img-fluid w-100"
            alt="welcome-banner"
          />
          <div className="carousel-caption">
            <div className="container py-4">
              <div className="row g-5 align-items-center">
                <div
                  className="col-xl-7 fadeInLeft animated"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-start">
                    <h1 className="text-white mb-4 welcome-text-style">
                      Hello, I’m Dr Sloka. I’m here to help you.
                    </h1>
                    <p className="mb-4 fs-6 welcome-text-content">
                      Dr. Sloka, (a pen name for Dr. Sukesh Krishna Chaitanya
                      Loka), professionally is a Clinical Pharmacologist, a
                      freelance Clinical Psychologist and a Medical Trainer. In
                      short, he is a Med and Mind Mentor! By Passion, he is a
                      poet, an artist, a writer and an author too! If your
                      struggle is in the mind, remember that your recovery is
                      also within your mind. Dr. Sloka guides you through the
                      recovery process!
                    </p>
                    <div className="d-flex flex-shrink-0">
                      <Link
                        to="/about"
                        className="btn btn-primary rounded-pill text-white py-3 px-5"
                      >
                        Read more
                      </Link>
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
                      alt="welcome-banner-profile"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default WelcomeBanner;
