import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function TopNav() {
  const linkClass = ({ isActive }) =>
    "nav-link px-2 " + (isActive ? "active fw-semibold text-white" : "text-white-50");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container container-narrow py-2">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src="/logo.jpg"
            alt="Blaze Of Fire Ministries"
            style={{
              width: 40,
              height: 40,
              objectFit: "cover",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
            }}
          />
          <span className="fw-bold">Blaze Of Fire</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <div className="navbar-nav ms-lg-auto mt-3 mt-lg-0">
            <NavLink className={linkClass} to="/">
              Home
            </NavLink>
            <NavLink className={linkClass} to="/visit">
              Visit
            </NavLink>
            <NavLink className={linkClass} to="/about">
              About
            </NavLink>
            <NavLink className={linkClass} to="/reviews">
              Reviews
            </NavLink>
            <NavLink className={linkClass} to="/contact">
              Contact
            </NavLink>
          </div>

          <div className="d-flex gap-2 ms-lg-3 mt-3 mt-lg-0">
            <a className="btn btn-sm btn-brand px-3" href="tel:+17542775244">
              Call
            </a>
            <a
              className="btn btn-sm btn-outline-light px-3"
              href="https://maps.google.com/?q=600%20Federal%20Hwy%20%232nd%2C%20Deerfield%20Beach%2C%20FL%2033441"
              target="_blank"
              rel="noreferrer"
            >
              Directions
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
