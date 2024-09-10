import React from "react";

const Header = () => {
  return (
    <div class="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a href="" class="navbar-brand p-0">
          <h1 class="display-6 text-dark">
            <i class="fas fa-swimmer text-primary me-3" />Dr. Sloka
          </h1>
          {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="fa fa-bars" />
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0">
            <a href="index.html" class="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" class="nav-item nav-link">
              About
            </a>
            <a href="service.html" class="nav-item nav-link">
              Service
            </a>
            <a href="blog.html" class="nav-item nav-link">
              Blog
            </a>

            <a href="contact.html" class="nav-item nav-link">
              Contact
            </a>
          </div>
          {/* <div class="team-icon d-none d-xl-flex justify-content-center me-3">
<a class="btn btn-square btn-light rounded-circle mx-1" href=""><i class="fab fa-facebook-f"></i></a>
<a class="btn btn-square btn-light rounded-circle mx-1" href=""><i class="fab fa-twitter"></i></a>
<a class="btn btn-square btn-light rounded-circle mx-1" href=""><i class="fab fa-instagram"></i></a>
<a class="btn btn-square btn-light rounded-circle mx-1" href=""><i class="fab fa-linkedin-in"></i></a>
</div>
<a href="#" class="btn btn-primary rounded-pill py-2 px-4 flex-shrink-0">Get Started</a> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
