import React, { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle.jsx";

const REVIEWS = [
  {
    name: "Luca Pantoja",
    meta: "Local Guide · 29 reviews · 7 months ago",
    rating: 5,
    highlight: "Spirit-filled • Prophetic • Apostolic teaching",
    text:
      "Blaze of Fire Ministries is truly a Spirit-filled wellspring of God’s presence! This church operates powerfully in the gifts of the Spirit, with a deeply prophetic atmosphere and apostolic teachings that are firmly rooted in the Word of God. It’s more than just a church. It’s a breeding ground for prophets, a spiritual training ground where callings are activated and destinies are unlocked.\n\nThe anointing that flows through this ministry is undeniable. From the church body as a whole, to the leadership of Pr. Marcelo and his wife, Pr. Priscilla. Their passion, dedication, and prophetic insight are matched by a team of seasoned prophets who walk in unity and humility. If you're hungry for truth, transformation, and to hear the voice of God clearly, this is the place. Blaze of Fire is not just a ministry, it’s a powerful move of God. 🙌🏼✝🙏🏼🔥🔥",
    tags: ["Prophetic", "Gifts of the Spirit", "Word-rooted"],
  },
  {
    name: "James Morice",
    meta: "Local Guide · 75 reviews · 6 years ago",
    rating: 3,
    highlight: "Caution • Pray & discern",
    text:
      "Don't be deceived. Pay close attention to their doctrine. If they don't preach or teach being conformed into Christ's image and emphasize the death, burial and resurrection of Jesus Christ you could run into issues. However, when I was there a few times the Holy Spirit DID do a mighty work on me in the midst of their teachings.\n\nAlso, at Bible study at the men's group on Wednesday nights, Marcelo was teaching about the \"Tribulation saints\" as if though it's possible for some believers to already have accepted Christ as Lord and Savior before the Great Tribulation and yet still have to endure the tribulation. I sensed a form of \"Chrislam\" where Christianity and Islam are being mixed in their teachings. All I am saying is pray about it before and during their teachings....",
    tags: ["Discernment", "Doctrine", "Prayer"],
  },
  {
    name: "Brian Stokes",
    meta: "4 reviews · 3 years ago",
    rating: 5,
    highlight: "Apostolic • Acts 2:42–47",
    text:
      "Faithful to the teachings of the first century apostolic church. Acts 2:42-47. It is sad that those who post negative comments know their Bible or the teaching of the early Christians.\n\nvery little of their Bible and the\n❤️1",
    tags: ["Acts 2", "Apostolic", "Bible"],
  },
  {
    name: "Carissa Cardona",
    meta: "9 reviews · 2 photos · 7 months ago",
    rating: 5,
    highlight: "Community • Holy Spirit fire",
    text:
      "This is a great community where the Holy Spirit is in fire here. This is truly the house of the Lords\n🔥1",
    tags: ["Community", "Worship", "Holy Spirit"],
  },
];

function Stars({ value = 5 }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < value);
  return (
    <span className="d-inline-flex align-items-center gap-1" aria-label={`${value} out of 5`}>
      {stars.map((on, idx) => (
        <i
          key={idx}
          className={`bi ${on ? "bi-star-fill" : "bi-star"}`}
          style={{ color: on ? "rgba(255,178,46,0.95)" : "rgba(255,255,255,0.25)" }}
        />
      ))}
    </span>
  );
}

export default function Reviews() {
  const [q, setQ] = useState("");
  const [minStars, setMinStars] = useState("all");

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    const min = minStars === "all" ? 0 : Number(minStars);

    return REVIEWS.filter((r) => {
      const hay = `${r.name} ${r.meta} ${r.highlight} ${r.text} ${(r.tags || []).join(" ")}`.toLowerCase();
      return (!qq || hay.includes(qq)) && r.rating >= min;
    });
  }, [q, minStars]);

  const counts = useMemo(() => {
    const total = REVIEWS.length;
    const avg = REVIEWS.reduce((a, r) => a + r.rating, 0) / Math.max(1, total);
    const byStar = [5, 4, 3, 2, 1].map((s) => ({
      s,
      n: REVIEWS.filter((r) => r.rating === s).length,
    }));
    return { total, avg, byStar };
  }, []);

  return (
    <div className="container container-narrow section-pad">
      <SectionTitle
        eyebrow="Reviews"
        title="What people are saying"
        subtitle="Public review snippets. You can replace these later with official embeds/links."
      />

      <div className="row g-3 g-md-4 mb-3">
        <div className="col-12 col-lg-7">
          <div className="card-dark p-3 p-md-4 h-100">
            <div className="d-flex align-items-start justify-content-between gap-3">
              <div>
                <div className="fw-semibold mb-1">Overall snapshot</div>
                <div className="small-muted">
                  Showing {counts.total} review snippet{counts.total === 1 ? "" : "s"} you provided
                </div>
              </div>
              <div className="text-end">
                <div className="fw-bold" style={{ fontSize: 28 }}>
                  {counts.avg.toFixed(1)}
                </div>
                <div className="small-muted">
                  <Stars value={Math.round(counts.avg)} /> <span className="ms-2">average</span>
                </div>
              </div>
            </div>

            <hr className="soft my-3" />

            <div className="d-flex flex-column gap-2">
              {counts.byStar.map((x) => {
                const pct = counts.total ? Math.round((x.n / counts.total) * 100) : 0;
                return (
                  <div key={x.s} className="d-flex align-items-center gap-2">
                    <div style={{ width: 64 }} className="small-muted">
                      {x.s} star
                    </div>
                    <div
                      className="progress flex-grow-1"
                      style={{ height: 10, background: "rgba(255,255,255,0.08)" }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${pct}%`,
                          background: "linear-gradient(135deg, var(--brand), var(--brand2))",
                        }}
                        aria-valuenow={pct}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                    <div className="small-muted" style={{ width: 44, textAlign: "right" }}>
                      {x.n}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5">
          <div className="card-dark p-3 p-md-4 h-100">
            <div className="fw-semibold mb-2">
              <i className="bi bi-funnel me-2" />
              Filter
            </div>

            <div className="mb-3">
              <label className="form-label small-muted">Search</label>
              <input
                className="form-control bg-transparent text-white border-secondary"
                placeholder="Search reviews..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label className="form-label small-muted">Minimum rating</label>
              <select
                className="form-select bg-transparent text-white border-secondary"
                value={minStars}
                onChange={(e) => setMinStars(e.target.value)}
              >
                <option value="all">All</option>
                <option value="5">5 stars</option>
                <option value="4">4+ stars</option>
                <option value="3">3+ stars</option>
                <option value="2">2+ stars</option>
                <option value="1">1+ star</option>
              </select>
            </div>

            <div className="d-grid gap-2 mt-3">
              <a
                className="btn btn-brand"
                href="https://www.google.com/search?q=Blaze+Of+Fire+Ministries+reviews"
                target="_blank"
                rel="noreferrer"
              >
                View on Google
              </a>
              <a
                className="btn btn-outline-light"
                href="https://www.facebook.com/search/top?q=blaze%20of%20fire%20ministries"
                target="_blank"
                rel="noreferrer"
              >
                Search on Facebook
              </a>
            </div>

            <div className="small text-white-50 mt-2">
              Tip: replace these buttons with the church’s real Google/Facebook pages later.
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 g-md-4">
        {filtered.map((r) => (
          <div className="col-12" key={`${r.name}-${r.meta}`}>
            <div className="card-dark p-3 p-md-4">
              <div className="d-flex flex-column flex-md-row align-items-start justify-content-between gap-3">
                <div>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <div className="fw-bold">{r.name}</div>
                    <span className="badge badge-soft">{r.highlight}</span>
                  </div>
                  <div className="small-muted mt-1">{r.meta}</div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <Stars value={r.rating} />
                  <span className="small-muted">{r.rating}/5</span>
                </div>
              </div>

              {r.tags?.length ? (
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {r.tags.map((t) => (
                    <span key={t} className="badge badge-soft">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="small-muted mt-3" style={{ whiteSpace: "pre-wrap" }}>
                {r.text}
              </div>
            </div>
          </div>
        ))}

        {!filtered.length ? (
          <div className="col-12">
            <div className="card-dark p-3 p-md-4 text-center">
              <div className="fw-semibold mb-1">No results</div>
              <div className="small-muted">Try clearing the search or lowering the minimum rating.</div>
              <button
                className="btn btn-outline-light mt-3"
                onClick={() => {
                  setQ("");
                  setMinStars("all");
                }}
              >
                Clear filters
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
