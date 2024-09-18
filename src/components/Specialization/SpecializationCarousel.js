import React from "react";
import DATA from "../../utils/app.json";
import "./Specialization.css";
import SpecializationItem from "./SpecializationItem";

const SpecializationCarousel = () => {
  const servicesData = DATA?.homepage?.ourServices || [];
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
        <div className="service-days px-2">
          {servicesData?.length > 0 &&
            servicesData.map((serviceCategory, index) => (
              <SpecializationItem
                key={index}
                title={serviceCategory?.title}
                data={serviceCategory?.data?.slice(0, 5) || []}
                isOdd={index % 2 !== 0}
                isFullPage={false}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SpecializationCarousel;
