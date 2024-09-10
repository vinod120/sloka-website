import React from "react";

const Gallery = () => {
  return (
    <div class="container-fluid gallery pb-5">
      <div class="container pb-5">
        <div
          class="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 class="text-primary">Our Gallery</h4>
          <h1 class="display-5 mb-4">Captured Moments In Waterland</h1>
          <p class="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div class="row g-4">
          <div class="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="gallery-item">
              <img
                src="https://drslokauk.netlify.app/static/media/quote.cd67fc6fffa5a746761a.png"
                class="img-fluid rounded w-100 h-100"
                alt=""
              />
              <div class="search-icon">
                <a
                  href="https://drslokauk.netlify.app/static/media/quote.cd67fc6fffa5a746761a.png"
                  class="btn btn-light btn-lg-square rounded-circle"
                  data-lightbox="Gallery-1"
                >
                  <i class="fas fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 wow fadeInUp" data-wow-delay="0.4s">
            <div class="gallery-item">
              <img
                src="https://drslokauk.netlify.app/static/media/quote2.c46e96b5be6984a84be2.png"
                class="img-fluid rounded w-100 h-100"
                alt=""
              />
              <div class="search-icon">
                <a
                  href="https://drslokauk.netlify.app/static/media/quote2.c46e96b5be6984a84be2.png"
                  class="btn btn-light btn-lg-square rounded-circle"
                  data-lightbox="Gallery-2"
                >
                  <i class="fas fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 wow fadeInUp" data-wow-delay="0.6s">
            <div class="gallery-item">
              <img
                src="https://drslokauk.netlify.app/static/media/quote3.afe282d919b038e04950.png"
                class="img-fluid rounded w-100 h-100"
                alt=""
              />
              <div class="search-icon">
                <a
                  href="https://drslokauk.netlify.app/static/media/quote3.afe282d919b038e04950.png"
                  class="btn btn-light btn-lg-square rounded-circle"
                  data-lightbox="Gallery-3"
                >
                  <i class="fas fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 wow fadeInUp" data-wow-delay="0.2s">
            <div class="gallery-item">
              <img
                src="https://drslokauk.netlify.app/static/media/quote.cd67fc6fffa5a746761a.png"
                class="img-fluid rounded w-100 h-100"
                alt=""
              />
              <div class="search-icon">
                <a
                  href="https://drslokauk.netlify.app/static/media/quote.cd67fc6fffa5a746761a.png"
                  class="btn btn-light btn-lg-square rounded-circle"
                  data-lightbox="Gallery-4"
                >
                  <i class="fas fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 wow fadeInUp" data-wow-delay="0.4s">
            <div class="gallery-item">
              <img
                src="https://drslokauk.netlify.app/static/media/quote2.c46e96b5be6984a84be2.png"
                class="img-fluid rounded w-100 h-100"
                alt=""
              />
              <div class="search-icon">
                <a
                  href="https://drslokauk.netlify.app/static/media/quote2.c46e96b5be6984a84be2.png"
                  class="btn btn-light btn-lg-square rounded-circle"
                  data-lightbox="Gallery-5"
                >
                  <i class="fas fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="gallery-item">
              <img
                src="https://drslokauk.netlify.app/static/media/quote3.afe282d919b038e04950.png"
                class="img-fluid rounded w-100 h-100"
                alt=""
              />
              <div class="search-icon">
                <a
                  href="https://drslokauk.netlify.app/static/media/quote3.afe282d919b038e04950.png"
                  class="btn btn-light btn-lg-square rounded-circle"
                  data-lightbox="Gallery-6"
                >
                  <i class="fas fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
