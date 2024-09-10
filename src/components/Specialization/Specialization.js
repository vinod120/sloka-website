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
          <h4 className="text-white">Our Service</h4>
        </div>
        <div className="row g-4">
          <div
            className="col-md-6 col-lg-6 col-xl-6 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h4 className="text-center display-6 text-primary mb-4">
            Therapies offered{" "}
          </h4>
            <div className="service-days p-4">
              <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                <h6 className="mb-0 pb-2 pb-sm-0">
                  Mindfulness Based Cognitive Therapy
                </h6>{" "}
              </div>
              <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                <h6 className="mb-0">Arts Therapy</h6>{" "}
              </div>
              <div className="py-2 border-bottom border-top d-flex align-items-center justify-content-between flex-wrap">
                <h6 className="mb-0 pb-2 pb-sm-0">
                  Compassion Focused Therapy
                </h6>{" "}
              </div>
              <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                <h6 className="mb-0 pb-2 pb-sm-0">
                  Neuro-linguistic Programming (NLP)
                </h6>{" "}
              </div>
              <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                <h6 className="mb-0">Cognitive Behavioural Therapy</h6>{" "}
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h4 className="text-center display-6 text-primary mb-4">
            Areas of specialism{" "}
          </h4>
            <div className="service-days p-4">
              <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                <h6 className="mb-0 pb-2 pb-sm-0">
                  Mindfulness Based Cognitive Therapy
                </h6>{" "}
              </div>
              <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                <h6 className="mb-0">Arts Therapy</h6>{" "}
              </div>
              <div className="py-2 border-bottom border-top d-flex align-items-center justify-content-between flex-wrap">
                <h6 className="mb-0 pb-2 pb-sm-0">
                  Compassion Focused Therapy
                </h6>{" "}
              </div>
              <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                <h6 className="mb-0 pb-2 pb-sm-0">
                  Neuro-linguistic Programming (NLP)
                </h6>{" "}
              </div>
              <div className="py-2 border-bottom d-flex align-items-center justify-content-between flex-shrink-1 flex-wrap">
                <h6 className="mb-0">Cognitive Behavioural Therapy</h6>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
