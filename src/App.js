import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Covid from './Covid/Covid';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Resources from './components/Resources/Resources';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './container/ScrollToTop';
import Donate from './components/Donate/Donate';
import Help from './components/Help/Help';
import Login from './components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import { auth } from './components/firebase';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) 
      {
        //user logged in successfully
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
          })
        );
      }
    });
  }, []);


  return (
    <div className="app">
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path='/Login' component={Login}>
          <Login />
        </Route>
        <Route path='/Help' component={Help}>
          <Help />
        </Route>
        <Route path='/Donate' component={Donate}>
          <Donate />
        </Route>
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
