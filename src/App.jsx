import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Extracurriculars from './components/Extracurriculars';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import CanvasBackground from './components/CanvasBackground';
import './index.css';

function App() {
  return (
    <>
      <CanvasBackground />
      <CustomCursor />
      <div className="container">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Extracurriculars />
        <Contact />
      </div>
    </>
  );
}

export default App;
