import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "./WelcomeBanner.css";
import { Link } from "react-router-dom";

const WelcomeBanner = () => {

  const welcomeBannerSlides = [
    {
      "image": "https://drslokauk.netlify.app/images/header_logo.png",
      "altText": "welcome-banner",
      "title": "Hello, I’m Dr Sloka. I’m here to help you",
      "description": "Dr. Sloka, (a pen name for Dr. Sukesh Krishna Chaitanya Loka), professionally is a Clinical Pharmacologist, a freelance Clinical Psychologist and a Medical Trainer. In short, he is a Med and Mind Mentor! By Passion, he is a poet, an artist, a writer and an author too! If your struggle is in the mind, remember that your recovery is also within your mind. Dr. Sloka guides you through the recovery process!",
      "link": "/about",
      "buttonText": "Read more",
      "profileImage": "https://drslokauk.netlify.app/images/Author-Image-1.png",
      "profileAltText": "welcome-banner-profile",
      "profileImageOpacity": "0.5",
      "animationStyleImage": "fadeInRight animated",
      "animationStyleText": "fadeInLeft animated",
    },
    {
      "image": "https://drslokauk.netlify.app/images/Author-Image-1.png",
      "altText": "welcome-banner",
      "title": "Hello, I’m Dr Sloka. I’m here to help you.",
      "description": "Dr. Sloka, (a pen name for Dr. Sukesh Krishna Chaitanya Loka), professionally is a Clinical Pharmacologist, a freelance Clinical Psychologist and a Medical Trainer. In short, he is a Med and Mind Mentor! By Passion, he is a poet, an artist, a writer and an author too! If your struggle is in the mind, remember that your recovery is also within your mind. Dr. Sloka guides you through the recovery process!",
      "link": "/about",
      "buttonText": "Read more",
      "profileImage": "https://drslokauk.netlify.app/images/header_logo.png",
      "profileAltText": "welcome-banner-profile",
      "profileImageOpacity": "0.5",
      "animationStyleImage": "fadeInLeft animated",
      "animationStyleText": "fadeInRight animated",
    }
  ];
  
  return (
    <Swiper
    spaceBetween={10}
    slidesPerView={1}
    autoplay={{delay: 8000}}
    modules={[Autoplay, Navigation]}
    loop={true}
    speed={2000}
    navigation={{
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    }}
    className="header-carousel"
    >
      {welcomeBannerSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="header-carousel-item">
            <img
              src={slide.image}
              className="img-fluid w-100"
              alt={slide.altText}
              loading="lazy" 
              decoding="async" 
              fetchpriority="high"
            />
            <div className="carousel-caption">
              <div className="container py-4">
                <div className="row g-5 align-items-center">
                  <div
                    className={`col-xl-7 ${slide?.animationStyle}`}
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="text-start">
                      <h1 className="text-white mb-4 welcome-text-style">
                        {slide.title}
                      </h1>
                      <p className="mb-4 fs-6 welcome-text-content">
                        {slide.description}
                      </p>
                      <div className="d-flex flex-shrink-0">
                        <Link
                          to={slide.link}
                          className="btn btn-primary rounded-pill text-white py-3 px-5"
                        >
                          {slide.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`col-xl-5 ${slide?.animationStyle}`}
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="p-5">
                      <img
                        src={slide.profileImage}
                        alt={slide.profileAltText}
                        style={{ opacity: slide.profileImageOpacity || "1" }}
                        loading="lazy" 
                        decoding="async" 
                        fetchpriority="high"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WelcomeBanner;
