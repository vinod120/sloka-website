import React from "react";

const Articles = () => {
  return (
    <div class="container-fluid blog pb-5">
      <div class="container pb-5">
        <div
          class="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 class="text-primary">Our Blog</h4>
          <h1 class="display-5 mb-4">Latest Blog & Articles</h1>
          <p class="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div class="row g-4 justify-content-center">
          <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
            <div class="blog-item">
              <div class="blog-img">
                <img
                  src=""
                  class="img-fluid w-100 rounded-top"
                  alt="Image"
                  style={{ height: "300px" }}
                />
                <div class="blog-category py-2 px-4">Vacation</div>
                <div class="blog-date">
                  <i class="fas fa-clock me-2" />August 19, 2025
                </div>
              </div>
              <div class="blog-content p-4">
                <a href="#" class="h4 d-inline-block mb-4">
                  Photo Gazing Therapy
                </a>
                <p class="mb-4">
                  We all know that we live every moment only once but if there’s
                  anything that can make us relive the same moment- It’s a
                  Photograph.....
                </p>
                <a href="#" class="btn btn-primary rounded-pill py-2 px-4">
                  Read More <i class="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
          {/* <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                <div class="blog-item">
                    <div class="blog-img">
                        <a href="#">
                            <img src="img/blog-3.jpg" class="img-fluid w-100 rounded-top" alt="Image" />
                        </a>
                        <div class="blog-category py-2 px-4">Insight</div>
                        <div class="blog-date"><i class="fas fa-clock me-2"></i>August 19, 2025</div>
                    </div>
                    <div class="blog-content p-4">
                        <a href="#" class="h4 d-inline-block mb-4">5 Ways To Enjoy Waterland This Spring Break</a>
                        <p class="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aspernatur nam quidem porro sapiente, neque a quibusdam....
                        </p>
                        <a href="#" class="btn btn-primary rounded-pill py-2 px-4">Read More <i class="fas fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                <div class="blog-item">
                    <div class="blog-img">
                        <a href="#">
                            <img src="img/blog-1.jpg" class="img-fluid w-100 rounded-top" alt="Image" />
                        </a>
                        <div class="blog-category py-2 px-4">Insight</div>
                        <div class="blog-date"><i class="fas fa-clock me-2"></i>August 19, 2025</div>
                    </div>
                    <div class="blog-content p-4">
                        <a href="#" class="h4 d-inline-block mb-4">3 Tips for Your Family Spring Break at Amusement Park</a>
                        <p class="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aspernatur nam quidem porro sapiente, neque a quibusdam....
                        </p>
                        <a href="#" class="btn btn-primary rounded-pill py-2 px-4">Read More <i class="fas fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Articles;
