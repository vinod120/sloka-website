import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import "./Header.css";
import navLinks from "../../utils/navLink";

const Header = () => {
  return (
    <div className="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0 box-shdw">
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink to="/" className="navbar-brand p-0">
          <h1 className="display-6 text-dark">
            <i className="fas fa-swimmer text-primary me-3" />Dr. Sloka
          </h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            {navLinks?.map((link) =>
              <NavLink
                key={link?.name}
                to={link?.path}
                className="nav-item nav-link"
                activeclassname="active"
                exact="true"
              >
                {link?.name}
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
