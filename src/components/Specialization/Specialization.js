import React from "react";
import "./Specialization.css";

const Specialization = () => {
  return (
    <div className="container-fluid service py-5">
      <div className="container service-section py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Service</h4>
          <h1 className="display-5 text-white mb-4">
            Therapies offered & Areas of specialism{" "}
          </h1>
          <p className="mb-0 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-0 col-md-1 col-lg-2 col-xl-2" />
          <div
            className="col-md-10 col-lg-8 col-xl-8 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="service-days p-4">
              <div className="py-2 border-bottom border-top d-flex align-items-center justify-content-between flex-wrap">
                <h4 className="mb-0 pb-2 pb-sm-0">Therapies offered </h4>{" "}
                <p className="mb-0">
                  <i className="fas fa-clock text-primary me-2" />Areas of
                  specialism{" "}
                </p>
              </div>
              <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                <h6 className="mb-0 pb-2 pb-sm-0">
                  Mindfulness Based Cognitive Therapy
                </h6>{" "}
                <p className="mb-0">
                  <i className="fas fa-clock text-primary me-2" />Depression
                </p>
              </div>
              <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                <h6 className="mb-0">Arts Therapy</h6>{" "}
                <p className="mb-0">
                  <i className="fas fa-clock text-primary me-2" />Panic Attacks
                </p>
              </div>
              <div className="py-2 border-bottom border-top d-flex align-items-center justify-content-between flex-wrap">
                <h6 className="mb-0 pb-2 pb-sm-0">
                  Compassion Focused Therapy
                </h6>{" "}
                <p className="mb-0">
                  <i className="fas fa-clock text-primary me-2" />Obsessive
                  Compulsive Disorder
                </p>
              </div>
              <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                <h6 className="mb-0 pb-2 pb-sm-0">
                  Neuro-linguistic Programming (NLP)
                </h6>{" "}
                <p className="mb-0">
                  <i className="fas fa-clock text-primary me-2" />Anxiety
                </p>
              </div>
              <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                <h6 className="mb-0">Cognitive Behavioural Therapy</h6>{" "}
                <p className="mb-0">
                  <i className="fas fa-clock text-primary me-2" />Stress Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
