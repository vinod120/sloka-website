import React from "react";
import { capitalizeEachWord } from "../../utils/index";
import { Link } from "react-router-dom";

const SpecializationItem = ({ title = "", data = [], isOdd, isFullPage }) => {
  return (
    <div className="service-container row justify-content-between align-items-center text-center wow fadeInUp">
      <div
        className={`col-12 col-md-5 col-lg-5 col-xl-5 services-title order-1 ${
          isOdd ? "order-md-2" : "order-md-1"
        }`}
      >
        <Link to="/our-services">
          <h4 className="text-center text-primary m-4 fw-bold">
            {capitalizeEachWord(title)}
          </h4>
        </Link>
      </div>
      <div
        className={`col-12 col-md-7 col-lg-7 col-xl-7 services-content order-2 ${
          isOdd ? "order-md-1" : "order-md-2"
        }`}
      >
        {data?.length > 0 &&
          data.map((item, index) => (
            <div key={index} className="py-2">
              {item.name}
            </div>
          ))}

        {!isFullPage && (
          <div className={`see-more-container mt-3 mb-3 text-center`}>
            <Link to="/our-services" className="text-primary fw-bold">
              See More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecializationItem;
