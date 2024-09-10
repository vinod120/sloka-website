import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HeaderCarousel = () => {
  return (
    <OwlCarousel
      className="owl-theme header-carousel"
      items={1}
      autoplay={true}
      smartSpeed={500}
      dots={false}
      loop={true}
      nav={true}
      navText={[
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
      ]}
      animateOut="slideOutDown"
    >
      {/* First Carousel Item */}
      <div className="header-carousel-item">
        <img src="" className="img-fluid w-100" alt="Image" />
        <div className="carousel-caption">
          <div className="container align-items-center py-4">
            <div className="row g-5 align-items-center">
              <div
                className="col-xl-7 fadeInLeft animated"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-start">
                  <h4 className="text-primary  fw-bold mb-4">
                    Hello, I’m Dr Sloka. I’m here to help you.
                  </h4>
                  <h1 className="text-white mb-4">
                    Hello, I’m Dr Sloka. I’m here to help you.k
                  </h1>
                  <p className="mb-4 fs-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry...
                  </p>
                  <div className="d-flex flex-shrink-0">
                    <a
                      className="btn btn-primary rounded-pill text-white py-3 px-5"
                      href="#"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 fadeInRight animated"
                style={{ animationDelay: "1s" }}
              >
                <div className="p-5">
                  {/* <h2 className="text-dark text-uppercase mb-4">Book Your Ticket</h2>
                  <form>
                    <div className="row g-4"> */}
                  <img
                    src="https://drslokauk.netlify.app/images/Author-Image-1.png"
                    alt="profile"
                  />
                  {/* </div> */}
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Carousel Item */}
      <div className="header-carousel-item">
        <img
          src="https://drslokauk.netlify.app/images/header_logo.png"
          className="img-fluid w-100"
          alt="Image"
        />
        <div className="carousel-caption">
          <div className="container py-4">
            <div className="row g-5 align-items-center">
              <div
                className="col-xl-7 fadeInLeft animated"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-start">
                  <h4 className="text-primary fw-bold mb-4">
                    Hello, I’m Dr Sloka. I’m here to help you.
                  </h4>
                  <h1 className="text-white mb-4">
                    Hello, I’m Dr Sloka. I’m here to help you.
                  </h1>
                  <p className="mb-4 fs-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry...
                  </p>
                  <div className="d-flex flex-shrink-0">
                    <a
                      className="btn btn-primary rounded-pill text-white py-3 px-5"
                      href="#"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 fadeInRight animated"
                style={{ animationDelay: "1s" }}
              >
                <div className="p-5">
                  {/* <h2 className="text-dark text-uppercase mb-4">Book Your Ticket</h2>
                  <form>
                    <div className="row g-4"> */}
                  <img
                    src="https://drslokauk.netlify.app/images/Author-Image-1.png"
                    alt="profile"
                  />
                  {/* </div> */}
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default HeaderCarousel;
