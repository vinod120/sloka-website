import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "./Books.css";
import { Link } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Not Just Sadness",
    img: "https://drslokauk.netlify.app/images/not_just_sadness.jpg",
    link: "/books/1"
  },
  {
    id: 2,
    title: "The Unspoken Thoughts",
    img: "https://drslokauk.netlify.app/images/the_unspoken_thoughts.jpg",
    link: "/books/2"
  },
];

const BooksCarousel = () => {
  const slidesPerViewSetting = {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    992: { slidesPerView: 1 },
    1200: { slidesPerView: 4 }
  };

  // Get the maximum number of slidesPerView based on breakpoints
  const maxSlidesPerView = Math.max(...Object.values(slidesPerViewSetting).map(bp => bp.slidesPerView));
  return (
    <div className="container-fluid attractions py-5">
      <div className="container attractions-section py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp animated"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Dr. Sloka's</h4>
          <h1 className="display-5 text-white mb-4">Books</h1>
          <p className="text-white mb-0">
            Transform your thoughts and life, nourish your mind and soul.
            <br />
            Explore Dr. Sloka’s books and start your journey to empower yourself!
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={false}
          speed={1500}
          loop={false}
          spaceBetween={25}
          centeredSlides={books.length > maxSlidesPerView ?  true : false}
          loopfillgroupwithblank={books.length > maxSlidesPerView ?  "false" : "true"}
          breakpoints={slidesPerViewSetting}
          className="books-carousel-container"
        >
          {books.map((book, index) => (
            <SwiperSlide
              key={book.id}
              className="wow fadeInUp animated"
              data-wow-delay={`${0.2 + index * 0.2}s`}
            >
              <div className="attractions-item">
                <img
                  src={book.img}
                  className="img-fluid rounded w-100"
                  alt={book.title}
                  loading="lazy" 
                  decoding="async" 
                  fetchpriority="high"
                />
                <Link to={`/books/${book.id}`} className="attractions-name">
                  {book.title}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BooksCarousel;
