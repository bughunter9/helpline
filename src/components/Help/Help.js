import React, { useState , useEffect } from 'react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { db } from '../firebase';
import firebase from 'firebase';
import Posts from './Posts';
import FlipMove from 'react-flip-move';
import './Help.css';
import web3 from '../../web3';

const courtABI = require("../../abis/Marketplace.json").abi;
const courtContractAddress = "0x1689dd47983565c98f382879a98c74c0cdc7b060"; //rinkeby portis wallet address


function Help() {

    const [inputName,setInputName] = useState('');
    const [inputResLink,setInputResLink] = useState('');
    const [inputAmount,setInputAmount] = useState('');
    const [inputWalletAddress,setInputWalletAddress] = useState('');
    const [posts,setPosts] = useState([]);
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState();

  
    useEffect(() => {
        db.collection("help")
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot) => (
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
        )
        ));
    }, []);

  
    const sendPost = e => {
        e.preventDefault();
  
        db.collection('help').add({
            name: inputName,
            resLink: inputResLink,
            amount: inputAmount,
            walletAddress: inputWalletAddress,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInputName("");
        setInputResLink("");
        setInputAmount("");
        setInputWalletAddress("");
        uploadProduct(inputName, inputResLink, inputAmount);
    };

      // Setup Contracts on App Load
        useEffect(() => {
            async function contractsSetup() {
            setContract(new web3.eth.Contract(courtABI, courtContractAddress));
            }
            contractsSetup();

            web3.eth.getAccounts((error, accounts) => {
            console.log(accounts);
            setAccount(accounts[0]);
            });
        }, []);

        const uploadProduct = (
            inputName,
            inputResLink,
            inputAmount
          ) => {
            contract.methods
              .createProduct(inputName, inputResLink, inputAmount)
              .send({
                from: account,
              })
              .then((r) => {
                console.log(r);
              });
          };


  return (
    <div className="help">
       <div className="help__header">
          <h2>Feel Free To Request For Any Financial Support</h2>
      </div>
      <div className="help__form">
      <mobiscroll.Form className="mbsc-form-grid" theme="ios"  themeVariant="light">
                <div className="mbsc-grid">
                    <div className="mbsc-row mbsc-justify-content-center">
                        <div className="mbsc-col-sm-9 mbsc-col-md-7 mbsc-col-xl-5 mbsc-align-center">
                            <mobiscroll.Note color="primary">Please Fill Out the Details Carefully</mobiscroll.Note>
                        </div>
                    </div>
                    <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-col-lg-6">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Full Name"
                            value={inputName} onChange={e => setInputName(e.target.value)} type="text">
                            Full Name</mobiscroll.Input>
                        </div>
                        <div className="mbsc-col-12 mbsc-col-lg-6">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Proof If Possible"
                            value={inputResLink} onChange={e => setInputResLink(e.target.value)}>
                            Proof ( Attach Link ) </mobiscroll.Input>
                        </div>
                    </div>
                    <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-col-lg-6">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Amount"
                            value={inputAmount} onChange={e => setInputAmount(e.target.value)} type="text">
                            Amount Required ( in Eth )</mobiscroll.Input>
                        </div>
                        <div className="mbsc-col-12 mbsc-col-lg-6">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Address of Digital Wallet"
                            value={inputWalletAddress} onChange={e => setInputWalletAddress(e.target.value)} type="text">
                            Wallet Address</mobiscroll.Input>
                        </div>
                    </div>
                    <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-col-md-16 mbsc-col-lg-3">
                            <div className="mobibutton mbsc-btn-group-block">
                                <mobiscroll.Button onClick={sendPost} type="submit" color="success">
                                Submit Details</mobiscroll.Button>
                            </div>
                        </div>
                    </div>
                </div>
            </mobiscroll.Form>
            </div>
            <FlipMove>
            {posts.map(({ id, data: {name, resLink, amount, walletAddress}}) => (
            <Posts
                key={id}
                name={name}
                resLink={resLink}
                amount={amount}
                walletAddress={walletAddress}
            />
        ))}
        </FlipMove>
    </div>
  )
}

export default Help
