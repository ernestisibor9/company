import React from "react";
import { Link, useLocation } from "react-router-dom";
import myLogo from "./images/myLogo.png";
import "./css/styles.css";

function Navbar() {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            <img src={myLogo} alt="logo" width={70} height={70} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "linkActive" : "nav-link"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  className={`nav-link ${
                    location.pathname === "/about" ? "linkActive" : "nav-link"
                  }`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="services"
                  className={`nav-link ${
                    location.pathname === "/services"
                      ? "linkActive"
                      : "nav-link"
                  }`}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className={`nav-link ${
                    location.pathname === "/contact" ? "linkActive" : "nav-link"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  SignIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
