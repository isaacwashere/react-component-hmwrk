import React, { Component } from 'react';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Projects from '../src/components/Projects';
import Resume from '../src/components/Resume';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import Main from '../src/components/Main';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
