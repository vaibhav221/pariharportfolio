import React from 'react'
import './All.css';
import Navbar from './Navbar.js'
import logo from './chakka.svg';
import arrow from './Arrow1.svg';

function About() {
  return (
    <div id="About_main_page">
      <div className='AboutPage'>
          <h2> & </h2>
          <h1>TransForm Ideas Into Reality <br/>With Purposeful Branding &<br/> Effective Web Designing</h1>
          <div className='About_logo'>
          <img src={logo} className="logo_about" alt="Logo" />
          <img src={arrow} className="arrow" alt="Logo" />
          </div>
      </div>
    {/* <div className='Bottom_navbar'><Navbar/></div> */}
    </div>
  )
}

export default About