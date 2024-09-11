import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "./Books.css";

const BooksCarousel = () => {
  return (
    <div className="container-fluid attractions py-5">
      <div className="container attractions-section py-5">
        <div
          className="text-center mx-auto pb-5"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Dr. Sloka's</h4>
          <h1 className="display-5 text-white mb-4">Books</h1>
          <p className="text-white mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000 }}
          speed={2000}
          loop={true}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          spaceBetween={25}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2 },
            1200: { slidesPerView: 2 },
            1400: { slidesPerView: 2 },
          }}
        >
          {/* Carousel Items */}
          <SwiperSlide>
            <div className="attractions-item">
              <img
                src="https://drslokauk.netlify.app/images/the_unspoken_thoughts.jpg"
                className="img-fluid books-img rounded w-100"
                alt="The Unspoken Thoughts"
              />
              <a href="#" className="attractions-name">
                Book1
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="attractions-item">
              <img
                src="https://drslokauk.netlify.app/images/not_just_sadness.jpg"
                className="img-fluid books-img rounded w-100"
                alt="Not Just Sadness"
              />
              <a href="#" className="attractions-name">
                Book2
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="attractions-item">
              <img
                src="https://drslokauk.netlify.app/images/the_unspoken_thoughts.jpg"
                className="img-fluid books-img rounded w-100"
                alt="The Unspoken Thoughts"
              />
              <a href="#" className="attractions-name">
                Book3
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="attractions-item">
              <img
                src="https://drslokauk.netlify.app/images/not_just_sadness.jpg"
                className="img-fluid books-img rounded w-100"
                alt="Not Just Sadness"
              />
              <a href="#" className="attractions-name">
                Book4
              </a>
            </div>
          </SwiperSlide>

          {/* Additional items as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default BooksCarousel;
