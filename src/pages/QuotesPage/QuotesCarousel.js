import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import './QuotesPage.css';
import { useNavigate } from 'react-router-dom';

const quotes = [
  {
    name: 'Dr. Sloka',
    quote: "Read as if you're finding the writer's heart <br />Write like you're reading the reader's mind",
  },
  {
    name: 'Dr. Sloka',
    quote: 'Progression in Life needs Initiation <br /> The seed of Initiation is Determination',
  },
  {
    name: 'Dr. Sloka',
    quote: 'He who dwells in the past has non pleasure <br /> He who peeps inot the future has no peace of <br />mind!!',
  },
];

const QuotesCarousel = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quotes');
  };

  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp animated" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Dr. Sloka's</h4>
          <h1 className="display-5 text-white mb-4">TRENDING QUOTES</h1>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000 }}
          speed={2500}
          loop={true}
          spaceBetween={25}
          slidesPerView={1}
          centeredSlides={true}
          allowTouchMove={false}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}

        >
          {quotes.map((item, index) => (
            <SwiperSlide key={index} className="testimonial-carousel cursor-pointer"
              data-wow-delay={`${0.2 + index * 0.2}s`} onClick={handleClick}>
              <div className="quotes-context testimonial-text-content quotes-container" >
                <p dangerouslySetInnerHTML={{ __html: item?.quote }}></p>
                <span className="sloka-sign-text" >--Dr.Sloka</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default QuotesCarousel;
