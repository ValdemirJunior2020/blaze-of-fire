import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Contact() {
  return (
    <div className="container container-narrow section-pad">
      <SectionTitle
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Call, visit, or send a message (form can be wired later)."
      />

      <div className="row g-3 g-md-4">
        <div className="col-12 col-lg-6">
          <div className="card-dark p-3 p-md-4 h-100">
            <div className="fw-semibold mb-2">
              <i className="bi bi-telephone me-2" />
              Phone
            </div>
            <div className="small-muted">(754) 277-5244</div>
            <div className="mt-3">
              <a className="btn btn-brand" href="tel:+17542775244">Tap to Call</a>
            </div>

            <hr className="soft my-4" />

            <div className="fw-semibold mb-2">
              <i className="bi bi-geo-alt me-2" />
              Address
            </div>
            <div className="small-muted">
              600 Federal Hwy #2nd
              <br />
              Deerfield Beach, FL 33441
            </div>
            <div className="mt-3 d-flex flex-column flex-sm-row gap-2">
              <a
                className="btn btn-outline-light"
                href="https://maps.google.com/?q=600%20Federal%20Hwy%20%232nd%2C%20Deerfield%20Beach%2C%20FL%2033441"
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="card-dark p-3 p-md-4 h-100">
            <div className="fw-semibold mb-3">
              <i className="bi bi-envelope me-2" />
              Message form (placeholder)
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="form-label small-muted">Name</label>
                <input className="form-control bg-transparent text-white border-secondary" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label className="form-label small-muted">Email</label>
                <input className="form-control bg-transparent text-white border-secondary" placeholder="you@email.com" />
              </div>
              <div className="mb-3">
                <label className="form-label small-muted">Message</label>
                <textarea className="form-control bg-transparent text-white border-secondary" rows="4" placeholder="How can we help?" />
              </div>
              <button className="btn btn-brand w-100" type="submit">Send (coming soon)</button>
              <div className="small text-white-50 mt-2">
                UI only — we can connect this to email/Firebase later.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
