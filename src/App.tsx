import React from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aboutme from './components/aboutme';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <About />
      <Aboutme />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
