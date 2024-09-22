import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./WelcomeBanner.css";
import { AppContext } from "../../App";

const WelcomeBannerSlide = ({ slide, mainImage, secondaryImage }) => (
  <div className="header-carousel-item">
    <img
      src={mainImage}
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
                src={secondaryImage}
                alt="welcome-banner-secondary"
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
);

const WelcomeBanner = () => {
  const { appData } = useContext(AppContext);
  const slide = appData?.welcomeBannerSlides?.[0];

  if (!slide) return null;

  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      autoplay={{ delay: 60000, disableOnInteraction: false }}
      modules={[Autoplay, Navigation]}
      loop={true}
      speed={2000}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      className="header-carousel"
    >
      <SwiperSlide>
        <WelcomeBannerSlide
          slide={slide}
          mainImage={slide?.backgroundImage}
          secondaryImage={slide?.profileImage}
        />
      </SwiperSlide>

      <SwiperSlide>
        <WelcomeBannerSlide
          slide={slide}
          mainImage={slide?.profileImage}
          secondaryImage={slide?.backgroundImage}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default WelcomeBanner;
