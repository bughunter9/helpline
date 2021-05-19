import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Covid from './Covid/Covid';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Covid />
      <Footer />
    </div>
  );
}

export default App;
