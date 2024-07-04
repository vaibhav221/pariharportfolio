import React from 'react';
import './All.css';
import Navbar from './Navbar';
import './AllMobileview.css';

const Contactpage = () => {
  return (
    <div id="Conatct-main-page">
    <div className="contact-container">
      <div className="contact-title">Like Our Work!</div>
      <div className="contact-heading">& Have A Project In Mind</div>
      <div className="contact-text">Then Let's Connect and Turn your Ideas Into Reality</div>
      <button className="contact-button">Schedule A Call</button>
      
    </div>
    <div className='Bottom_navbar'><Navbar/></div>
    </div>
  );
}

export default Contactpage;
