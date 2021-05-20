import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Covid from './Covid/Covid';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Resources from './components/Resources/Resources';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './container/ScrollToTop';

function App() {
  return (
    <div className="app">
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path='/Resources' component={Resources}>
          <Resources />
        </Route>
        <Route path='/Covid' component={Covid}>
          <Covid />
        </Route>
        <Route path='/' component={About}>
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
