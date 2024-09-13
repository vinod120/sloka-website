import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Import additional modules
import './QuotesPage.css'; // Assuming you have this file for your styles
import headerLogo from "../../images/dr2.jpg"

const quotes = [
  {
    image: headerLogo,
    name: 'Dr. Sloka',
    quote: "Read as if you're finding the writer's heart <br />Write like you're reading the reader's mind",
  },
  {
    image: headerLogo,
    name: 'Dr. Sloka',
    quote: 'Progression in Life needs Initiation <br /> The seed of Initiation is Determination',
  },
  {
    image: headerLogo,
    name: 'Dr. Sloka',
    quote: 'He who dwells in the past has non pleasure <br /> He who peeps inot the future has no peace of <br />mind!!',
  },
];

const QuotesCarousel = () => {
  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp animated" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Dr. Sloka's</h4>
          <h1 className="display-5 text-white mb-4">TRENDING QUOTES</h1>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={false}
          speed={1000}
          loop={true}
          spaceBetween={25}
          slidesPerView={1}
          centeredSlides={true}
          allowTouchMove={false}
          
        >
          {quotes.map((item, index) => (
            <SwiperSlide key={index} className="testimonial-carousel wow fadeInUp animated"
            data-wow-delay={`${0.2 + index * 0.2}s`}>
              <div className="testimonial-item p-4" style={{ width: '70%', margin: '0 auto' }}> 
                <p className="text-white fs-4 mb-4" dangerouslySetInnerHTML={{ __html: item?.quote }}></p>
                <div className="testimonial-inner">
                  <div className="testimonial-img">
                    <img src={item?.image} className="img-fluid" alt="testimonial" />
                    <div className="testimonial-quote btn-lg-square rounded-circle">
                      <i className="fa fa-quote-right fa-2x"></i>
                    </div>
                  </div>
                  <div className="ms-4">
                    <h4>{item?.name}</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default QuotesCarousel;
