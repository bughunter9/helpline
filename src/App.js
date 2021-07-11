import React, { useEffect , useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Covid from './components/Covid/Covid';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Resources from './components/Resources/Resources';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './container/ScrollToTop';
//import Donate from './components/Donate/Donate';
import Help from './components/Help/Help';
import Login from './components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import { auth } from './components/firebase';


function App() {

  const user = useSelector(selectUser);
  const [state,setState] = useState();
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
    <Router>

    {!user ? (
      <Login />
    ) : (
      <div className="app">
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path='/Help' component={Help}>
          <Help />
        </Route>
        {/* <Route path='/Donate' component={Donate}>
          <Donate />
        </Route> */}
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
    </div>
  )}
  </Router>
  );
}

export default App;
