import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import TopNav from "./components/TopNav.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Visit from "./pages/Visit.jsx";
import About from "./pages/About.jsx";
import Reviews from "./pages/Reviews.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="app-shell d-flex flex-column min-vh-100">
      <TopNav />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
