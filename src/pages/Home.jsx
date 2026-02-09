import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Home() {
  return (
    <div>
      <div className="container container-narrow section-pad">
        <div className="hero p-4 p-md-5">
          <div className="position-relative" style={{ zIndex: 2 }}>
            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="badge badge-soft">Holy Spirit Filled</span>
              <span className="badge badge-soft">Gifts of the Spirit</span>
              <span className="badge badge-soft">Deerfield Beach, FL</span>
            </div>

            <h1 className="display-6 fw-bold mb-3">Blaze Of Fire Ministries</h1>

            <p className="lead small-muted mb-4">
              A church that believes in the gifts of the Spirit and loves Jesus.
              Come worship with us and experience the presence of God.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-2">
              <a className="btn btn-brand btn-lg" href="tel:+17542775244">
                Call (754) 277-5244
              </a>
              <a
                className="btn btn-outline-light btn-lg"
                href="https://maps.google.com/?q=600%20Federal%20Hwy%20%232nd%2C%20Deerfield%20Beach%2C%20FL%2033441"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
              <Link className="btn btn-outline-light btn-lg" to="/visit">
                Plan a Visit
              </Link>
            </div>
          </div>
        </div>

        <div className="row g-3 g-md-4 mt-4">
          <div className="col-12 col-md-4">
            <div className="card-dark p-3 p-md-4 h-100">
              <div className="fw-semibold mb-1">
                <i className="bi bi-geo-alt me-2" />
                Location
              </div>
              <div className="small-muted">
                Located in Deerfield Square
                <br />
                600 Federal Hwy #2nd
                <br />
                Deerfield Beach, FL 33441
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card-dark p-3 p-md-4 h-100">
              <div className="fw-semibold mb-1">
                <i className="bi bi-telephone me-2" />
                Phone
              </div>
              <div className="small-muted">(754) 277-5244</div>
              <div className="mt-3">
                <a className="btn btn-sm btn-outline-light" href="tel:+17542775244">
                  Tap to call
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card-dark p-3 p-md-4 h-100">
              <div className="fw-semibold mb-1">
                <i className="bi bi-star-fill me-2" />
                Reviews
              </div>
              <div className="small-muted">4.5+ rating on Google</div>
              <div className="mt-3">
                <Link className="btn btn-sm btn-outline-light" to="/reviews">
                  Read reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container container-narrow section-pad">
        <SectionTitle
          eyebrow="What you can expect"
          title="A place to worship, grow, and be strengthened"
          subtitle="Mobile-first and clean on every screen."
        />

        <div className="row g-3 g-md-4">
          <div className="col-12 col-md-6">
            <div className="card-dark p-3 p-md-4 h-100">
              <div className="fw-semibold mb-2">
                <i className="bi bi-music-note-beamed me-2" />
                Worship
              </div>
              <div className="small-muted">Passionate worship with room for the Holy Spirit to move.</div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card-dark p-3 p-md-4 h-100">
              <div className="fw-semibold mb-2">
                <i className="bi bi-book me-2" />
                The Word
              </div>
              <div className="small-muted">Bible-centered teaching focused on Jesus and practical life.</div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card-dark p-3 p-md-4 h-100">
              <div className="fw-semibold mb-2">
                <i className="bi bi-heart-pulse me-2" />
                Prayer
              </div>
              <div className="small-muted">We believe God still heals, speaks, and strengthens His people.</div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card-dark p-3 p-md-4 h-100">
              <div className="fw-semibold mb-2">
                <i className="bi bi-people me-2" />
                Community
              </div>
              <div className="small-muted">Friendly people, welcoming atmosphere, and space to belong.</div>
            </div>
          </div>
        </div>

        <div className="mt-4 d-flex flex-column flex-sm-row gap-2">
          <Link className="btn btn-brand" to="/visit">Plan Your Visit</Link>
          <Link className="btn btn-outline-light" to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
