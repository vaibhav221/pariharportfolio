import './Maincomponent.css';
import React, { useEffect } from 'react';
import About from './About';
import HomePage from './HomePage';
import Workgallery from './Workgallery';
import Ourprojects from './Ourprojects';
import Ourservices from './Ourservices';
import Contactpage from './ContactPage';
import Footer from './Footer';
import Process from './Process';

const Maincomponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.scrollanimate-card');
      const viewportHeight = window.innerHeight;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardMiddle = cardRect.top + cardRect.height / 2;

        if (cardMiddle < viewportHeight && cardMiddle > 0) {
          card.style.opacity = 1;
          card.style.zIndex = cards.length - index; // Ensure the card stacks on top
        } else {
          card.style.opacity = 0;
          card.style.zIndex = 0; // Reset z-index when the card is out of view
        }
      });
    };

    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener('scroll', debouncedHandleScroll);
    handleScroll(); // Call handleScroll initially to set initial opacity based on initial scroll position

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  return (
    <div className="scrollanimate-container">
      <div id="home-page" className="scrollanimate-card"><HomePage /></div>
      <div id="about" className="scrollanimate-card"><About /></div>
      <div id="work-gallery" className="scrollanimate-card"><Workgallery /></div>
      <div id="our-projects" className="scrollanimate-card"><Ourprojects /></div>
      <div id="services-container" className="scrollanimate-card"><Ourservices /></div>
      <div id="process" className="scrollanimate-card"><Process/></div>
      <div id="contactpage-container" className="scrollanimate-card"><Contactpage /></div>
      <div className="scrollanimate-card"><Footer /></div>
    </div>
  );
};

export default Maincomponent;
