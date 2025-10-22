import React from "react";
import { useNavigate } from "react-router-dom";
import ebookImg from "../../../assets/Readers-Assets/images/Frame (1).png";
import "./ReaderHome.css";

const ReaderHome = () => {
  const navigate = useNavigate();
  const cards = Array(6).fill(null);

  const handleNavigation = (path) => navigate(path);
  const handleAuth = (action) => console.log(`${action} clicked`);

  return (
    <section className="reader-home-section">
      <div className="reader-home-container">
        {/* Hero Section */}
        <div className="hero-section">
          {/* Left Content */}
          <div className="hero-content">
            <h1 className="hero-title">Story Host</h1>
            <p className="hero-subtitle">Lorem ipsum dolor sit amet</p>
            <div className="hero-divider"></div>
            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>

            {/* Auth Buttons */}
            <div className="auth-buttons">
              <button
                className="btn btn-signup"
                onClick={() => handleAuth("Sign Up")}
              >
                Sign Up
              </button>
              <button
                className="btn btn-signin"
                onClick={() => handleAuth("Sign In")}
              >
                Sign In
              </button>
            </div>

            <button
              className="btn-guest"
              onClick={() => handleNavigation("/home")}
            >
              Browse as Guest
            </button>
          </div>

          {/* Right Illustration */}
          <div className="hero-image">
            <img
              src={ebookImg}
              alt="Reader illustration"
              className="illustration-img"
            />
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className="cards-section">
          <div className="cards-wrapper">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`card-item ${index === 0 ? "card-empty" : ""}`}
              >
                <i className="bi bi-image card-icon"></i>
              </div>
            ))}
          </div>

          <div className="top-lists-wrapper">
            <button
              className="btn-top-lists"
              onClick={() => handleNavigation("/readinghome")}
            >
              Top lists
              <span className="underline"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReaderHome;