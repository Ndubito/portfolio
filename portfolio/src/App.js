import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;