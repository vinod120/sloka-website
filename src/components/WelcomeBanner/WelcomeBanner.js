import React from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DATA from "../../utils/app.json";
import "./WelcomeBanner.css";

const WelcomeBanner = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      modules={[Autoplay, Navigation]}
      loop={true}
      speed={2000}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      }}
      className="header-carousel"
    >
      {DATA?.homepage?.welcomeBannerSlides.map((slide) => (
        <SwiperSlide key={slide?.id || slide?.backgroundImage}>
          <div className="header-carousel-item">
            <img
              src={slide?.backgroundImage}
              className="img-fluid w-100"
              alt="welcome-banner"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
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
                        {slide?.title}
                      </h1>
                      <p className="mb-4 fs-6 welcome-text-content">
                        {slide?.description}
                      </p>
                      <div className="d-flex flex-shrink-0">
                        <Link
                          to="/about"
                          className="btn btn-primary rounded-pill text-white py-3 px-5"
                          aria-label="Read more"
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
                        src={slide?.profileImage}
                        alt="welcome-banner-profile"
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
