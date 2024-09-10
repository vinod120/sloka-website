import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import "./Header.css";
import navLinks from "../../utils/navLink";
import headerLogo from "../../images/dr2.jpg"
const Header = () => {
  return (
    <div className="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0 box-shdw">
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink to="/" className="navbar-brand p-0">
          <div className="text-dark header-logo-container d-flex align-items-center">
          <img src={headerLogo} alt="header-logo" /> Dr. Sloka
          </div>
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
                className="nav-item nav-link nav-mr-4"
                activeclassname="active"
                exact="true"
              >
               <i className={`${link?.icon}`} />  {link?.name}
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
