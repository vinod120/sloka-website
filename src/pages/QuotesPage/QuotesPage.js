import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome for icons

const QuotesPage = () => {
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
          <h1 className="display-5 text-white mb-4">TREDING QUOTES</h1>
        </div>

        {/* Owl Carousel */}
        <OwlCarousel
          className="owl-theme testimonial-carousel wow fadeInUp"
          autoplay={true}
          smartSpeed={1500}
          dots={true}
          loop={true}
          margin={25}
          nav={true}
          responsive={{
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 1 },
            992: { items: 1 },
            1200: { items: 1 },
          }}
        >
          {/* Testimonial 1 */}


          {/* Testimonial 2 */}
          <div className="testimonial-item p-4">
            <p className="text-white fs-4 mb-4">
              Read as if you're finding the writer's heart

              Write like you're reading the reader's mind
            </p>
            <div className="testimonial-inner d-flex">
              <div className="testimonial-img">
                <img
                  src="img/testimonial-2.jpg"
                  className="img-fluid"
                  alt="Testimonial"
                />
                <div className="testimonial-quote btn-lg-square rounded-circle">
                  <i className="fa fa-quote-right fa-2x"></i>
                </div>
              </div>
              <div className="ms-4">
                <h4>Dr. Sloka</h4>

              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-item p-4">
            <p className="text-white fs-4 mb-4">
              Progression in Life need Initiation

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
                  <i className="fa fa-quote-right fa-2x"></i>
                </div>
              </div>
              <div className="ms-4">
                <h4>Dr. Sloka</h4>

              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default QuotesPage;
