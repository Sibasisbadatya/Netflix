import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__row__1">
        <h4>Questions? Call 000-800-040-1843</h4>
      </div>
      <div className="footer__row__2">
        <div className="column">
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div className="column">
          <p>Help Centre</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>
        <div className="column">
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corporate Information</p>
          <p>Only on Netflix</p>
        </div>
        <div className="column">
          <p>Media Centre</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="footer__row__3">
        <div className="dropdown__container">
          <i className="fas fa-globe"></i>
        </div>
      </div>
      <div className="footer__row__4">
        <p>Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;