import React from "react";
import DATA from "../../utils/app.json";
import "./Specialization.css";

const ServiceList = ({ title, data }) => (
  <div
    className="col-md-6 col-lg-6 col-xl-6 wow fadeInUp"
    data-wow-delay="0.2s"
  >
    <h4 className="text-center text-primary mb-4 fw-bold">{title}</h4>
    <div className="service-days p-4">
      {data?.length > 0 &&
        data?.map((item) => (
          <div key={item?.name} className="py-2 border-bottom">
            <h6 className="mb-0 pb-2 pb-sm-0">{item.name}</h6>
          </div>
        ))}
    </div>
  </div>
);

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
          <ServiceList
            title="Therapies offered"
            data={DATA?.homepage?.ourServices?.therapies || []}
          />
          <ServiceList
            title="Areas of specialism"
            data={DATA?.homepage?.ourServices?.specialisms || []}
          />
        </div>
      </div>
    </div>
  );
};

export default Specialization;
