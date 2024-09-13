import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "./Articles.css";

const ArticlesCarousel = () => {
  return (
    <div className="container-fluid blog pb-5 mt-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Blog</h4>
          <h1 className="display-5 mb-4">Latest Blog & Articles</h1>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}             
          spaceBetween={30}
          autoplay={false}            
         
          loop={true}                
          centeredSlides={true}         
          allowTouchMove={false}        
        >
          <SwiperSlide>
            <div className="col-lg-4">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src="https://placehold.co/400"
                    className="img-fluid w-100 rounded-top"
                    alt="blog"
                    style={{ height: "300px" }}
                  />
                  <div className="blog-category py-2 px-4">Vacation</div>
                  <div className="blog-date">
                    <i className="fas fa-clock me-2" />August 19, 2025
                  </div>
                </div>
                <div className="blog-content p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    Photo Gazing Therapy
                  </a>
                  <p className="mb-4">
                    We all know that we live every moment only once but if
                    there’s anything that can make us relive the same moment—It’s a
                    Photograph.....
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More <i className="fas fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="col-lg-4">
              <div className="blog-item">
                <div className="blog-img">
                  <img
                    src="https://placehold.co/400"
                    className="img-fluid w-100 rounded-top"
                    alt="blog"
                    style={{ height: "300px" }}
                  />
                  <div className="blog-category py-2 px-4">Adventure</div>
                  <div className="blog-date">
                    <i className="fas fa-clock me-2" />September 12, 2025
                  </div>
                </div>
                <div className="blog-content p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    Hiking for the Mind
                  </a>
                  <p className="mb-4">
                    Find peace and clarity by exploring nature. Join us on a
                    journey to balance physical health and mental well-being....
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More <i className="fas fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ArticlesCarousel;
