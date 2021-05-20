import React, { useState , useEffect } from 'react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { db } from '../firebase';
import firebase from 'firebase';
import Posts from './Posts';
import FlipMove from 'react-flip-move';
import './Help.css';

function Help(props) {

    const [inputName,setInputName] = useState('');
    const [inputResLink,setInputResLink] = useState('');
    const [inputAmount,setInputAmount] = useState('');
    const [inputWalletAddress,setInputWalletAddress] = useState('');
    const [posts,setPosts] = useState([]);

    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState("0x0");
    const [contract, setContract] = useState(null);
    const [value, setValue] = useState("0.01");
  
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

    useEffect((props) => {
        if (!web3) {
          setWeb3(props.web3);
          setAccount(props.account);
          setContract(props.contract);
        }
      }, [web3, account, contract]);
  
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
        requestMoney();
    };


    const requestMoney = async () => {
        const res = await contract.methods
          .requestMoney( inputName, web3.utils.toWei(value), inputWalletAddress)
          .send({
            from: account,
            gas: web3.utils.toHex("50000"),
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
