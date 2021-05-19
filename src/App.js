import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Covid from './Covid/Covid';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      {/* <Covid /> */}
      <Footer />
    </div>
  );
}

export default App;
