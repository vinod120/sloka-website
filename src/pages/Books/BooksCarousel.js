import React from "react";
import OwlCarousel from "react-owl-carousel";

const BooksCarousel = () => {
  return (
    <div className="container-fluid attractions py-5">
      <div className="container attractions-section py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Dr. Sloka's</h4>
          <h1 className="display-5 text-white mb-4">Books</h1>
          <p className="text-white mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>

        {/* Owl Carousel */}
        <OwlCarousel
          className="owl-theme attractions-carousel wow fadeInUp"
          autoplay={true}
          smartSpeed={2000}
          center={false}
          dots={false}
          loop={true}
          margin={25}
          nav={true}
          navText={[
            '<i className="fa fa-angle-right left-nav-1"></i>',
            '<i className="fa fa-angle-left right-nav-1"></i>'
          ]}
          responsive={{
            0: {
              items: 1
            },
            576: {
              items: 2
            },
            768: {
              items: 2
            },
            992: {
              items: 3
            },
            1200: {
              items: 3
            },
            1400: {
              items: 3
            }
          }}
        >
          {/* Carousel Items */}
          <div className="attractions-item wow fadeInUp" data-wow-delay="0.2s">
            <img
              src="https://drslokauk.netlify.app/images/the_unspoken_thoughts.jpg"
              className="img-fluid books-img rounded w-100"
              alt="Roller Coaster"
            />
            <a href="#" className="attractions-name">
              Book1
            </a>
          </div>

          <div className="attractions-item wow fadeInUp" data-wow-delay="0.4s">
            <img
              src="https://drslokauk.netlify.app/images/not_just_sadness.jpg"
              className="img-fluid books-img rounded w-100"
              alt="Carousel"
            />
            <a href="#" className="attractions-name">
              Book2
            </a>
          </div>

          <div className="attractions-item wow fadeInUp" data-wow-delay="0.6s">
            <img
              src="https://drslokauk.netlify.app/images/the_unspoken_thoughts.jpg"
              className="img-fluid books-img rounded w-100"
              alt="Arcade Game"
            />
            <a href="#" className="attractions-name">
              Book3
            </a>
          </div>
          <div className="attractions-item wow fadeInUp" data-wow-delay="0.2s">
            <img
              src="https://drslokauk.netlify.app/images/not_just_sadness.jpg"
              className="img-fluid books-img rounded w-100"
              alt="Roller Coaster"
            />
            <a href="#" className="attractions-name">
              Book1
            </a>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default BooksCarousel;
