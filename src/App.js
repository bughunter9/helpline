import React, { useEffect , useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Covid from './components/Covid/Covid';
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
import Marketplace from './abis/Marketplace.json';
import Web3 from 'web3';


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

  useEffect(() =>{
      loadWeb3()
      loadBlockchainData()
  },[])


    async function loadWeb3() {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
      }
      else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
      }
      else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
    }

  async function loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkId]
    if(networkData) {
      const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address)
      setState({ marketplace })
      const productCount = await marketplace.methods.productCount().call()
      setState({ productCount })
      // Load products
      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call()
        setState({
          products: [...this.state.products, product]
        })
      }
      setState({ loading: false})
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }
  }


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
    </Router>
    </div>
  );
}

export default App;
