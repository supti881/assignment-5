import React from 'react';

import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          {/* Brand Column with Logo File */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img src= '/assets/logo-text.png' alt="Dev Stack Logo" className="footer-logo-img" />
            </div>
            <p className="footer-description">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="footer-socials">
              <a href="#github">GitHub</a>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-group">
            <div className="link-column">
              <h4>PRODUCT</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#technologies">Technologies</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>

            <div className="link-column">
              <h4>COMPANY</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>

            <div className="link-column">
              <h4>LEGAL</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Line & Copyright */}
        <div className="footer-bottom-bar">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="bottom-right-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;