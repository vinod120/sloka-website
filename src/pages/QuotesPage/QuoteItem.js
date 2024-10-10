import React from "react";

const QuoteItem = ({ image, lightboxId, delay, colSize }) => {
  return (
    <div className={`col-md-${colSize} wow fadeInUp`} data-wow-delay={`${delay}s`}>
      <div className="gallery-item">
        <img
          src={image}
          className="img-fluid rounded w-100 h-100"
          alt="quote"
          loading="lazy" 
          decoding="async" 
          fetchpriority="high"
        />
        {/* Download icon */}
        <div className="download-icon">
          <a href={image} download className="btn btn-light btn-lg-square rounded-circle">
            <i className="fas fa-download" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;
