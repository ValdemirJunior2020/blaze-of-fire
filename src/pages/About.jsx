import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";

export default function About() {
  return (
    <div className="container container-narrow section-pad">
      <SectionTitle
        eyebrow="About"
        title="Blaze Of Fire Ministries"
        subtitle="A Holy Spirit filled church that believes in the gifts of the Spirit and the power of Jesus."
      />

      <div className="row g-3 g-md-4">
        <div className="col-12 col-lg-7">
          <div className="card-dark p-3 p-md-4">
            <div className="fw-semibold mb-2">What we believe</div>
            <p className="small-muted mb-3">
              We love Jesus, honor the Word of God, and make room for the Holy Spirit.
              We believe God still moves today with salvation, healing, and spiritual gifts.
            </p>

            <div className="fw-semibold mb-2">Our heart</div>
            <p className="small-muted mb-0">
              To worship God in spirit and truth, grow as disciples, and serve our community with love.
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-5">
          <div className="card-dark p-3 p-md-4 h-100">
            <div className="fw-semibold mb-2">
              <i className="bi bi-building me-2" />
              Details
            </div>
            <div className="small-muted">
              Religious organization in Deerfield Beach, Florida
              <br />
              Located in: Deerfield Square
            </div>
            <hr className="soft my-3" />
            <div className="d-flex flex-column gap-2">
              <a className="btn btn-outline-light" href="/reviews">See Reviews</a>
              <a className="btn btn-brand" href="/visit">Plan a Visit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
