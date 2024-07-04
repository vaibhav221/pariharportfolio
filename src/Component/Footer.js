import React from 'react';
import './All.css'; 
import logo from './MainVplogo.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div>
          <p className="footer-main-text">Vaibhav Parihar</p>
          <p className="footer-sub-text">Designs</p>
        </div>
      </div>
      <div className="footer-center">
        <p className="footer-contact">Contact</p>
        <p className="footer-email">ranyparihar@gmail.com</p>
        <div className="footer-underline"></div>
      </div>
      <div className="footer-right">
        <p className="footer-follow">Follow me on</p>
        <div className="footer-social-icons">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
