import React, { useEffect } from "react";
import DATA from "../../utils/app.json";
import "./Specialization.css";
import SpecializationItem from "./SpecializationItem";

const Specialization = () => {
  const servicesData = DATA?.homepage?.ourServices || [];
  
  useEffect(() => {
    window && window.scrollTo(0, 0)
  }, [])
  

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
        <div className="row g-4 service-days w-100">
          {servicesData?.length > 0 &&
            servicesData.map((serviceCategory, index) => (
              <SpecializationItem
                key={index}
                title={serviceCategory?.title}
                data={serviceCategory?.data || []}
                isOdd={index % 2 !== 0}
                isFullPage
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Specialization;
