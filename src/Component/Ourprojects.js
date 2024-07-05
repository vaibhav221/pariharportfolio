import React from 'react';
import './All.css';
import Navbar from './Navbar';
import { HashLink as Link } from 'react-router-hash-link';

const Ourprojects = () => {
  return (
    <div id="project-App">
    <div className='project_header'>
    <div className="project-top-left">
      <p className="project-our-text">Our</p>
      <p className="project-project-text">Projects</p>
    </div>
    <div className="project-top-right">
      <p className="project-explore-text">Explore My Recent Projects</p>
      <button className="project-explore-button">Let's See</button>
    </div>
    </div>
    <div className="project-image-row">
      <Link smooth to="/Project1_Page"><img src="https://via.placeholder.com/400x300" alt="Placeholder 1" /></Link>
      <Link smooth to="/Project2_Page"><img src="https://via.placeholder.com/400x300" alt="Placeholder 2" /></Link>
    </div>
    <div className='Bottom_navbar'><Navbar/></div>
  </div>
);
}

export default Ourprojects;
