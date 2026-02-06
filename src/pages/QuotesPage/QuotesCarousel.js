import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AppContext } from "../../App";
import "./QuotesPage.css";

const QuotesCarousel = () => {
  const navigate = useNavigate();
  const {appData} = useContext(AppContext);
  const quotesData = appData?.quotes

  const handleClick = () => {
    navigate("/quotes");
  };

  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp animated"
          style={{ maxWidth: "800px" }}
        >
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
            nextEl: ".swiper-button-next"
          }}
        >
          {quotesData?.length > 0 &&
            quotesData?.map((item, index) => (
              <SwiperSlide
                key={item?.id}
                className="testimonial-carousel cursor-pointer"
                data-wow-delay={`${0.2 + index * 0.2}s`}
                onClick={handleClick}
              >
                <div className="quotes-context testimonial-text-content quotes-container">
                  <p dangerouslySetInnerHTML={{ __html: item?.quote }}></p>
                  <span className="sloka-sign-text">--Dr.Sloka</span>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default QuotesCarousel;
