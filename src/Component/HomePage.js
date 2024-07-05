import React from 'react';
import logo from './MainVplogo.png'; // Make sure you have a logo.png in the src folder
import movingImage from './Vaibhav.svg'; 
import './All.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CustomCursor from './Customcursor.js';
import Navbar from './Navbar.js';
import Figma_logo from './Figma_logo.svg';
import Logo from './Logo.js';
import Logomobileview from './LogomobileView.js';
import './AllMobileview.css';


function HomePage() {
  return (
    <div id="App">
      <CustomCursor/>
      <div className='Maindivlogo'><Logo/></div>
      <div className='Mobileviewlogo'><Logomobileview/></div>
      
      <div className="content">
      
        <div className="moving-text">
          <b>I DESIGN & I TRAVEL</b>I DESIGN  & I TRAVEL<b>I DESIGN  & I TRAVEL</b>I DESIGN & I TRAVEL<b>I DESIGN & I TRAVEL</b>
          </div>
        <div className="image-container">
          <img src={movingImage} className="content-image" alt="Moving Content" />
          <img src={Figma_logo} className="Figma-image" alt="Moving Content" />
          
          <br/>
          {/* <div className="overlay-text">Transform ideas Into Reality With <br/> Purposeful Branding and Effective<br/> Web Designing </div>
        */}
              </div>
          <div className='third-div-text'> 
            <span className='third-div-text-span'>Hi! I Am Vaibhav Parihar And </span>I Design Interfaces<br/> That's Make People's Lives Easier
          </div>
        </div>
        <div><button className='Work_Together'>Let's Work Together</button></div>
      
      <div className='Bottom_navbar'><Navbar/></div>
      </div>

  );
}

export default HomePage;
