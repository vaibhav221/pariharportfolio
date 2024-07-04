import React from 'react';
import './All.css';
import Navbar from './Navbar';

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
      <img src="https://via.placeholder.com/400x300" alt="Placeholder 1" />
      <img src="https://via.placeholder.com/400x300" alt="Placeholder 2" />
    </div>
    {/* <div className='Bottom_navbar'><Navbar/></div> */}
  </div>
);
}

export default Ourprojects;
