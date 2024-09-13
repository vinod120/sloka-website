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
        <div className="search-icon">
          <a
            href={image}
            className="btn btn-light btn-lg-square rounded-circle"
            data-lightbox={lightboxId}
          >
            <i className="fas fa-search-plus" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;