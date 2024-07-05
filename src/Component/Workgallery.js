import React, { useRef, useState, useEffect } from 'react';
import './All.css'; // Import your CSS for styling
import Navbar from './Navbar';
import img1 from './1_Work_gallery.svg';
import img2 from './2_Work_gallery.svg';
import img3 from './3_Work_gallery.svg';
import img4 from './4_Work_gallery.svg';
import img5 from './5_Work_gallery (1).svg';
import img6 from './5_Work_gallery (10).svg';
import img7 from './5_Work_gallery (11).svg';
import img8 from './5_Work_gallery (7).svg';
import img9 from './5_Work_gallery (8).svg';
import img10 from './5_Work_gallery (9).svg';

const images = [    
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10
];

const Workgallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const scrollAmount = 400; // Adjust scroll amount as needed
  const intervalTime = 3000; // Automatic scroll interval (3 seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    scrollCarousel(scrollAmount);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    scrollCarousel(-scrollAmount);
  };

  const scrollCarousel = (amount) => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      let newPosition = scrollLeft + amount;

      if (newPosition > scrollWidth - clientWidth) {
        newPosition = 0;
      } else if (newPosition < 0) {
        newPosition = scrollWidth - clientWidth;
      }

      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });

      // Determine the new index after scrolling
      const newIndex = Math.round(newPosition / clientWidth);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div id="Work_gallery" className="work-gallery">
            <div className='Bottom_navbar' id="Navbar_Process"><Navbar/></div>
      <div className="gallery-container">
        <h1 className="title">Work</h1>
        <p className="subtitle">Gallery</p>
        <div className="carousel" ref={carouselRef}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="control-button prev" onClick={handlePrev}>
          ‹ 
        </button>
        <button className="control-button next" onClick={handleNext}>
           ›
        </button>
      </div>
  
    </div>
  );
};

export default Workgallery;