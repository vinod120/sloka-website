import React from "react";
import "./Articles"; // Assuming you're using an external CSS file for styling
import { Link } from "react-router-dom";

const ArticlesCarousel = () => {
  return (
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp animated"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Dr. Sloka's</h4>
          <h1 className="display-5 mb-4">Latest Blog & Articles</h1>
        </div>
        <div className="row g-4 justify-content-center wow fadeInUp animated">
          <BlogItem
            imgSrc="/images/articles_img1.png"
            title="Photo Gazing Therapy"
            description="We all know that we live every moment only once but if there’s anything that can make us relive the same moment- It’s a Photograph. The power of a single photograph is so incredible that it takes us quickly back to the same moment....."
            readMoreLink="#"
          />
        </div>
      </div>
    </div>
  );
};

const BlogItem = ({ imgSrc, title, description }) => {
  return (
    <div className="col-lg-4">
      <div className="blog-item blog-carousel">
        <div className="blog-img">
          <img
            src={imgSrc}
            loading="lazy"
            decoding="async"
            fetchpriority="high"
            className="img-fluid w-100 rounded-top"
            alt="Blog"
          />
        </div>
        <div className="blog-content p-4">
          <span className="h4 d-inline-block mb-4">
            {title}
          </span>
          <p className="mb-4">
            {description}
          </p>
          <Link
            to="/articles"
            className="btn btn-primary rounded-pill py-2 px-4 article-read-more"
          >
            Read More <i className="fas fa-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCarousel;
