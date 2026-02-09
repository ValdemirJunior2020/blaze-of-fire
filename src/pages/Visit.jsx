import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Visit() {
  return (
    <div className="container container-narrow section-pad">
      <SectionTitle
        eyebrow="Plan your visit"
        title="We’d love to welcome you"
        subtitle="Here’s the key info to make your first visit easy."
      />

      <div className="row g-3 g-md-4">
        <div className="col-12 col-lg-7">
          <div className="card-dark p-3 p-md-4 h-100">
            <div className="fw-semibold mb-2">
              <i className="bi bi-geo-alt me-2" />
              Where to go
            </div>
            <div className="small-muted">
              Located in: Deerfield Square
              <br />
              Address: 600 Federal Hwy #2nd, Deerfield Beach, FL 33441
            </div>
            <div className="mt-3 d-flex flex-column flex-sm-row gap-2">
              <a
                className="btn btn-brand"
                href="https://maps.google.com/?q=600%20Federal%20Hwy%20%232nd%2C%20Deerfield%20Beach%2C%20FL%2033441"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
              <a className="btn btn-outline-light" href="tel:+17542775244">
                Call (754) 277-5244
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5">
          <div className="card-dark p-3 p-md-4 h-100">
            <div className="fw-semibold mb-2">
              <i className="bi bi-info-circle me-2" />
              What to expect
            </div>
            <ul className="small-muted mb-0">
              <li>Come as you are.</li>
              <li>Friendly welcome at the door.</li>
              <li>Worship + teaching + prayer.</li>
              <li>We believe in the gifts of the Spirit.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4 card-dark p-3 p-md-4">
        <div className="fw-semibold mb-2">
          <i className="bi bi-car-front me-2" />
          Parking tip
        </div>
        <div className="small-muted">
          Park near the Deerfield Square area and follow signage to Suite #2nd.
        </div>
      </div>
    </div>
  );
}
