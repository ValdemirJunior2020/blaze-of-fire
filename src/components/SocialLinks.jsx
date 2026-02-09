import React from "react";

export default function SocialLinks() {
  // Replace with the church's real links when you have them:
  const links = [
    { label: "Instagram", icon: "bi-instagram", href: "https://www.instagram.com/blazeoffireglobal/" },
    { label: "Facebook", icon: "bi-facebook", href: "https://www.facebook.com/BlazeofFireGlobal" }
  ];

  return (
    <div className="d-flex flex-wrap gap-2">
      {links.map((l) => (
        <a
          key={l.label}
          className="btn btn-sm btn-outline-light"
          href={l.href}
          target={l.href === "#" ? undefined : "_blank"}
          rel={l.href === "#" ? undefined : "noreferrer"}
          aria-label={l.label}
        >
          <i className={`bi ${l.icon} me-2`} />
          {l.label}
        </a>
      ))}
    </div>
  );
}
