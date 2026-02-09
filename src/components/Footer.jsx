import React from "react";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="container container-narrow section-pad">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-6">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span
                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                style={{ width: 36, height: 36, background: "linear-gradient(135deg, var(--brand), var(--brand2))" }}
              >
                <i className="bi bi-fire" style={{ color: "#0b1220", fontSize: 18 }} />
              </span>
              <div>
                <div className="fw-bold">Blaze Of Fire Ministries</div>
                <div className="small-muted">Deerfield Beach, Florida</div>
              </div>
            </div>

            <div className="small-muted">
              Address: 600 Federal Hwy #2nd, Deerfield Beach, FL 33441
              <br />
              Phone: (754) 277-5244
            </div>

            <div className="mt-3">
              <SocialLinks />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="card-dark p-3 p-md-4">
              <div className="fw-semibold mb-2">Quick Links</div>
              <div className="d-flex flex-column gap-2">
                <a className="text-white-50" href="/visit">Plan Your Visit</a>
                <a className="text-white-50" href="/contact">Contact</a>
                <a
                  className="text-white-50"
                  href="https://maps.google.com/?q=600%20Federal%20Hwy%20%232nd%2C%20Deerfield%20Beach%2C%20FL%2033441"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                </a>
              </div>
              <hr className="soft my-3" />
              <div className="small-muted">
                © {new Date().getFullYear()} Blaze Of Fire Ministries • Built with React + Bootstrap
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
