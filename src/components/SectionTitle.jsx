import React from "react";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-4">
      {eyebrow ? (
        <div className="text-uppercase small fw-semibold badge badge-soft px-2 py-1 d-inline-block mb-2">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="fw-bold mb-2">{title}</h2>
      {subtitle ? <p className="small-muted mb-0">{subtitle}</p> : null}
    </div>
  );
}
