import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Covid from './Covid/Covid';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Resources from './components/Resources/Resources';

function App() {
  return (
    <div className="app">
      <Header />
      {/* <About /> */}
      {/* <Covid /> */}
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
