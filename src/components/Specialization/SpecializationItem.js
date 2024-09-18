import React from "react";
import { capitalizeEachWord } from "../../utils/index";
import { Link } from "react-router-dom";
const SpecializationItem = ({
  title = "",
  data = [],
  isOdd,
  isFullPage,
}) => {
  return (
    <div className="service-container row justify-content-between align-items-center text-center wow fadeInUp">
      <div className={`col-5 services-title ${isOdd ? "order-2" : "order-1"}`}>
        <h4 className="text-center text-primary mb-4 fw-bold ">
          {capitalizeEachWord(title)}
        </h4>
      </div>
      <div
        className={`col-7 services-content ${isOdd ? "order-1" : "order-2"}`}
      >
        {data?.length > 0 &&
          data.map((item, index) => (
            <div key={index} className="py-2 border-bottom">
              {item.name}
            </div>
          ))}

        {!isFullPage && (
          <div
            className={`see-more-container mt-3 ${
              isOdd ? "text-start" : "text-end"
            }`}
          >
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
