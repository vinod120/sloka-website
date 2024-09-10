import React, { useEffect } from "react";
import "animate.css";
import Articles from "../Articles/Articles";
import Gallery from "../QuotesPage/Gallery";
import HeaderCarousel from "../../components/Header/HeaderCarousel";
import AttractionsCarousel from "../Books/AttractionsCarousel";
import QuotesPage from "../QuotesPage/QuotesPage";
import ContactForm from "../ContactForm/ContactForm";
import BackToTop from "../../components/BackToTop";

const HomePage = () => {
  return (
    <div>
      {/* <!-- Spinner Start --> */}
      <div
        id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          class="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      {/* <!-- Spinner End --> */}

      {/* <!-- Navbar & Hero Start --> */}
      {/* <!-- Navbar & Hero End --> */}

      {/* <!-- Carousel Start --> */}

      <HeaderCarousel />
      {/* <!-- Carousel End --> */}


      {/* <!-- Service Start --> */}
      <div class="container-fluid service py-5">
        <div class="container service-section py-5">
          <div
            class="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <h4 class="text-primary">Our Service</h4>
            <h1 class="display-5 text-white mb-4">
              Therapies offered & Areas of specialism{" "}
            </h1>
            <p class="mb-0 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div class="row g-4">
            <div class="col-0 col-md-1 col-lg-2 col-xl-2" />
            <div
              class="col-md-10 col-lg-8 col-xl-8 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div class="service-days p-4">
                <div class="py-2 border-bottom border-top d-flex align-items-center justify-content-between flex-wrap">
                  <h4 class="mb-0 pb-2 pb-sm-0">Therapies offered </h4>{" "}
                  <p class="mb-0">
                    <i class="fas fa-clock text-primary me-2" />Areas of
                    specialism{" "}
                  </p>
                </div>
                <div class="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                  <h6 class="mb-0 pb-2 pb-sm-0">
                    Mindfulness Based Cognitive Therapy
                  </h6>{" "}
                  <p class="mb-0">
                    <i class="fas fa-clock text-primary me-2" />Depression
                  </p>
                </div>
                <div class="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                  <h6 class="mb-0">Arts Therapy</h6>{" "}
                  <p class="mb-0">
                    <i class="fas fa-clock text-primary me-2" />Panic Attacks
                  </p>
                </div>
                <div class="py-2 border-bottom border-top d-flex align-items-center justify-content-between flex-wrap">
                  <h6 class="mb-0 pb-2 pb-sm-0">
                    Compassion Focused Therapy
                  </h6>{" "}
                  <p class="mb-0">
                    <i class="fas fa-clock text-primary me-2" />Obsessive
                    Compulsive Disorder
                  </p>
                </div>
                <div class="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                  <h6 class="mb-0 pb-2 pb-sm-0">
                    Neuro-linguistic Programming (NLP)
                  </h6>{" "}
                  <p class="mb-0">
                    <i class="fas fa-clock text-primary me-2" />Anxiety
                  </p>
                </div>
                <div class="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                  <h6 class="mb-0">Cognitive Behavioural Therapy</h6>{" "}
                  <p class="mb-0">
                    <i class="fas fa-clock text-primary me-2" />Stress
                    Management
                  </p>
                </div>
              </div>
            </div>
             </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- Attractions Start --> */}
      
      <AttractionsCarousel />
      {/* <!-- Attractions End --> */}

      {/* <!-- Gallery Start --> */}
      <Gallery />
      {/* <!-- Gallery End --> */}

      {/* <!-- Blog Start --> */}
      <Articles />
      {/* <!-- Blog End --> */}

      
      <QuotesPage />
      {/* <!-- Testimonial End --> */}

      {/* <!-- Footer Start --> */}

      {/* <!-- Footer End --> */}
    <ContactForm />
      {/* <!-- Back to Top --> */}
      <BackToTop />
    </div>
  );
};

export default HomePage;
