import React, { useState , useEffect } from 'react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { db } from '../firebase';
import firebase from 'firebase';
import Posts from './Posts';
import FlipMove from 'react-flip-move';
import './Donate.css';

function Donate() {

    const [inputName,setInputName] = useState('');
    const [inputAmount,setInputAmount] = useState('');
    const [posts,setPosts] = useState([]);
  
    useEffect(() => {
        db.collection("donate")
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
  
        db.collection('donate').add({
            name: inputName,
            amount: inputAmount,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInputName("");
        setInputAmount("");
    };


  return (
    <div className="donate">
       <div className="donate__header">
          <h2>Help Someone In Need</h2>
      </div>
      <div className="donate__form">
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
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Amount to Donate"
                            value={inputAmount} onChange={e => setInputAmount(e.target.value)}>
                            Amount ( in Eth )</mobiscroll.Input>
                        </div>
                    </div>
                    <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-col-md-16 mbsc-col-lg-3">
                            <div className="mbsc-btn-group-block">
                                <mobiscroll.Button onClick={sendPost} type="submit" color="success">
                                Donate </mobiscroll.Button>
                            </div>
                        </div>
                    </div>
                </div>
            </mobiscroll.Form>
            </div>
            <FlipMove>
            {posts.map(({ id, data: {name, amount }}) => (
            <Posts
                key={id}
                name={name}
                amount={amount}
            />
        ))}
        </FlipMove>
    </div>
  )
}

export default Donate;
