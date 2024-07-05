import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maincomponent from './Component/Maincomponent';
import Contact from './Component/Contact';
import Project1 from './Component/Project1';
import Project2 from './Component/Project2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Maincomponent />} />
      <Route path="/contactpage-container" element={<Contact />} /> 
      <Route path="/Project1_Page" element={<Project1 />} />
      <Route path="/Project2_Page" element={<Project2/>} />
    </Routes>
  );
}

export default App;
