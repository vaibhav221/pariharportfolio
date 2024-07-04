import React from 'react';
import './All.css';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  return (
    <div className="footer">
      <Link className="footer-button" id="footer-button-1" smooth to="#home-page">Services</Link>
      <Link className="footer-button" smooth to="#our-projects">Our Project</Link>
      <Link className="footer-button" smooth to="#services-container">Project</Link>
      <Link className="footer-button" smooth id="footer-button-2" to="#contactpage-container">Let's Connect</Link>
    </div>
  );
}

export default Navbar;
