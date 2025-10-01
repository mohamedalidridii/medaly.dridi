import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-contact">
          <h4>
            Let’s Collaborate <br />
            </h4>
          <p className="secondary">
          From building bold websites to launching creative digital campaigns — I’m always open to collaborating on innovative projects. Let’s create something impactful together.
          </p>
            <Link to="https://linktr.ee/medaly.dridi" className="btn">
      Get in Touch
      </Link>
        </div>

        <div className="footer-nav">
          <Link to="/" className="footer-nav-item">
            <span>Home</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/work" className="footer-nav-item">
            <span>Impact</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/about" className="footer-nav-item">
            <span>About</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/contact" className="footer-nav-item">
            <span>Contact</span>
            <span>&#8594;</span>
          </Link>
{/* 
          <Link to="/faq" className="footer-nav-item">
            <span>FAQ</span>
            <span>&#8594;</span>
          </Link> */}
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-header">
          <h1>Med Aly</h1>
          <h1>Dridi</h1>
        </div>

        <div className="footer-copyright-line">
          <p className="primary sm">&copy; Med Aly Dridi 2025</p>
          <p className="primary sm">All rights reserved to Med Ali Dridi</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
