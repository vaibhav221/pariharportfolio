import React, { useRef, useEffect } from 'react';
import './All.css'; 
import Navbar from './Navbar.js';
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

const Workgallery = () => {
    const scrollerRef = useRef(null);
    let intervalId = useRef(null);

    const startScrolling = () => {
        const scroller = scrollerRef.current;
        intervalId.current = setInterval(() => {
            scroller.scrollLeft += 1;
            if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth-1) {
                scroller.scrollLeft = 0;
            }
        }, 20);
    };

    const stopScrolling = () => {
        clearInterval(intervalId.current);
    };

    useEffect(() => {
        startScrolling();
        return () => clearInterval(intervalId.current);
    }, []);

    return (
        <div id="Work_gallery">
            {/* <div className='Bottom_navbar'><Navbar/></div> */}
            <div className="gallery-container">
                <h1 className="title">Work</h1>
                <p className="subtitle">Gallery</p>
                <div className="image-scroller" ref={scrollerRef}>
                    <img src={img1} alt="Placeholder 1" />
                    <img src={img2} alt="Placeholder 2" />
                    <img src={img3} alt="Placeholder 3" />
                    <img src={img4} alt="Placeholder 4" />
                    <img src={img5} alt="Placeholder 5" />
                    <img src={img6} alt="Placeholder 6" />
                    <img src={img7} alt="Placeholder 7" />
                    <img src={img8} alt="Placeholder 8" />
                    <img src={img9} alt="Placeholder 9" />
                    <img src={img10} alt="Placeholder 10" />
                </div>
                {/* <button className="control-button" onMouseDown={stopScrolling} onMouseUp={startScrolling} onTouchStart={stopScrolling} onTouchEnd={startScrolling}>
                    Stop
                </button> */}
                <div className='Control-buttons'>
                <button className="control-button" id="Control-left-button"onClick={() => scrollerRef.current.scrollLeft -= 500}>
                    ‹
                </button><br/>
                <button className="control-button"id="Control-right-button" onClick={() => scrollerRef.current.scrollLeft += 500}>
                    ›
                </button>
                </div>
            </div>
        </div>
    );
};

export default Workgallery;
