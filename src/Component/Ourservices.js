import React from 'react';
import './All.css'; // Make sure to create and import the CSS file
import Navbar from './Navbar';
import './OurServices.css';
import gif1 from './logo-design.gif';
import gif2 from './social-media.gif';
import gif3 from './startup.gif';
import gif4 from './subscribe.gif';


const Ourservices = () => {
  return (
    <div id="services-container">
      <div className="services-left">
        <h1 className="services-title">Our</h1>
        <h2 className="services-heading">Services</h2>
        <p className="services-text">What You'll Get As A Result</p>
      </div>
      
      <div className="services-right">
        <div className="services-row">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front services-card">
                <img src={gif1} className="services-logo" alt="Logo" />
                <p className="services-card-text">Branding</p>
                <p className="services-card-text-2">& Logo Design</p>
              </div>
              <div className="flip-card-back services-card-2">
                <p className="services-card-text" id="services-card-text-1"><p>Crafing  Iconic Identities <br/>for your Brand</p>
                <p>Promotional  Materials<br/>That  Reflect The Brand Identity</p>
                <p>Creating Content<br/>Strategies</p>
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front services-card">
                <img src={gif2} className="services-logo" alt="Logo" />
                <p className="services-card-text">Social Media </p>
                <p className="services-card-text-2">Post <br/> Design</p>
              </div>
              <div className="flip-card-back services-card-2">
                <p className="services-card-text"id="services-card-text-2"><br/><br/><br/><p>Engage Your Audience With Stuning Visuals</p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="services-row">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front services-card">
                <img src={gif3} className="services-logo" alt="Logo" />
                <p className="services-card-text">Design & Development</p>
                <p className="services-card-text-2">Personalized <br />Website</p>
              </div>
              <div className="flip-card-back services-card-2">
                <p className="services-card-text"id="services-card-text-3"><br/><br/><p>Cutom Crafted<br/> Website That Embody <br/>Your Brand, And Engage <br/>Your Audience</p></p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front services-card">
                <img src={gif4} className="services-logo" alt="Logo" />
                <p className="services-card-text">Some text will be here</p>
                <p className="services-card-text-2">Design <br/> Subscription</p>
              </div>
              <div className="flip-card-back services-card-2">
                <p className="services-card-text" id="services-card-text-4"><br/>" Struggling  To find Realiable <br/>Freelancers? Partners With Me For Consistent, High <br/> Design Work-Flexible And <br/>Easy To Start Or Cancel <br/>Anytime. "</p>
              </div>
            </div>
          </div>
        </div>
        <div className='Services-navbar'><Navbar/></div> 
      </div>
      
    </div>
  );
}

export default Ourservices;

