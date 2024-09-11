import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ring from "../../images/dr2.jpg";
import "./QuotesPage.css";

const QuotesCarousel = () => {
  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        {/* Section Header */}
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Dr. Sloka's </h4>
          <h1 className="display-5 text-white mb-4">TRENDING QUOTES</h1>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          className="owl-theme testimonial-carousel wow fadeInUp"
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }} // Adjust delay for autoplay
          speed={2000} // Adjust transition speed
          loop={true}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          spaceBetween={25}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="testimonial-item p-4">
              <p className="text-white fs-4 mb-4">
                Read as if you're finding the writer's heart <br />Write like you're
                reading the reader's mind
              </p>
              <div className="testimonial-inner d-flex">
                <div className="testimonial-img">
                  <img
                    src={ring}
                    className="img-fluid"
                    alt="Testimonial"
                  />
                  <div className="testimonial-quote btn-lg-square rounded-circle">
                    <i className="fa fa-quote-right fa-2x" />
                  </div>
                </div>
                <div className="ms-4">
                  <h4>Dr. Sloka</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="testimonial-item p-4">
              <p className="text-white fs-4 mb-4">
                Progression in Life needs Initiation <br />
                The seed of Initiation is Determination
              </p>
              <div className="testimonial-inner d-flex">
                <div className="testimonial-img">
                  <img
                    src="img/testimonial-3.jpg"
                    className="img-fluid"
                    alt="Testimonial"
                  />
                  <div className="testimonial-quote btn-lg-square rounded-circle">
                    <i className="fa fa-quote-right fa-2x" />
                  </div>
                </div>
                <div className="ms-4">
                  <h4>Dr. Sloka</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Additional Testimonials */}
        </Swiper>
      </div>
    </div>
  );
};

export default QuotesCarousel;
