import React from "react";
import logo from "../image/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="features">
          <h4>Features</h4>

          <ul>
            <li>Link Shortening </li>
            <li>Branded Links </li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="resources">
          <h4>Resources</h4>

          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="company">
          <h4>Company</h4>

          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="social">
          <i className="margin-right fab fa-facebook-f"></i>
          <i className="margin-right fab fa-twitter"></i>
          <i className="margin-right fab fa-pinterest"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
