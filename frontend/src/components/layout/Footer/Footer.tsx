import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <span className="footer-brand">DELL</span>
            <span style={{ margin: '0 8px' }}>|</span>
            <span>Power to Do More</span>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-divider">
          © {year} Dell Landing Page. All rights reserved.
          <span className="footer-heart">Made with ❤ in Detroit.</span>
        </div>
        <div className="footer-legal">
          © Certain automotive content displayed within this website are protected under
          the United States and international copyright law. Any unauthorized use, reproduction,
          distribution, recording or modification of this content is strictly prohibited.
        </div>
      </div>
    </footer>
  );
};