import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand">Bilal</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="mobileMenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/table-view" className="nav-link">
                Table View
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/grid-view" className="nav-link">
                Grid View
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/list-view" className="nav-link">
                List View
              </Link>
            </li>{" "}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
