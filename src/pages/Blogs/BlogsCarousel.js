import React from "react";
import "./Blogs.css";

const BlogsCarousel = () => {
  return (
    <div className="container-fluid blog pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Blog</h4>
          <h1 className="display-5 mb-4">Latest Blog & Articles</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="blog-item">
              <div className="blog-img">
                <img
                  src=""
                  className="img-fluid w-100 rounded-top"
                  alt="blog"
                  style={{ height: "300px" }}
                />
                <div className="blog-category py-2 px-4">Vacation</div>
                <div className="blog-date">
                  <i className="fas fa-clock me-2" />August 19, 2025
                </div>
              </div>
              <div className="blog-content p-4">
                <a href="#" className="h4 d-inline-block mb-4">
                  Photo Gazing Therapy
                </a>
                <p className="mb-4">
                  We all know that we live every moment only once but if there’s
                  anything that can make us relive the same moment- It’s a
                  Photograph.....
                </p>
                <a href="#" className="btn btn-primary rounded-pill py-2 px-4">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCarousel;
