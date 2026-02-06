import { useContext } from "react";
import { AppContext } from "../../App";
import "./Specialization.css";
import SpecializationItem from "./SpecializationItem";

const SpecializationCarousel = () => {
  const { appData } = useContext(AppContext);
  const servicesData = appData?.ourServices || [];
  
  return (
    <div className="container-fluid service py-5">
      <div className="container service-section py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Dr. Sloka's</h4>
          <h1 className="display-5 text-white mb-4">Services</h1>
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
