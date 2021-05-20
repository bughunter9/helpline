import React, { useState, useEffect } from "react";
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { db } from '../firebase';
import firebase from 'firebase';
import Posts from './Posts';
import FlipMove from 'react-flip-move';

function Resources() {

  const [inputName,setInputName] = useState('');
  const [inputLink,setInputLink] = useState('');
  const [inputResource,setInputResource] = useState('');
  const [inputCity,setInputCity] = useState('');
  const [inputCountry,setInputCountry] = useState('');
  const [posts,setPosts] = useState([]);

  useEffect(() => {
      db.collection("posts")
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

      db.collection('posts').add({
          name: inputName,
          resource: inputResource,
          city: inputCity,
          country: inputCountry,
          resourceLink: inputLink,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInputName("");
      setInputResource("");
      setInputCity("");
      setInputCountry("");
      setInputResource("");
      setInputLink("");
  };

  return (
    <div className="resources">
      <div className="form__container">
      <mobiscroll.Form className="mbsc-form-grid" theme="ios"  themeVariant="light">
                <div className="mbsc-grid">
                    <div className="mbsc-row mbsc-justify-content-center">
                        <div className="mbsc-col-sm-9 mbsc-col-md-7 mbsc-col-xl-5 mbsc-align-center">
                            <mobiscroll.Note color="primary">Please Fill Out the Details for any Verified Resources</mobiscroll.Note>
                        </div>
                    </div>
                    <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-col-lg-6">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Full Name"
                            value={inputName} onChange={e => setInputName(e.target.value)} type="text">
                            Full Name</mobiscroll.Input>
                        </div>
                        <div className="mbsc-col-12 mbsc-col-lg-6">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Resource Link"
                            value={inputLink} onChange={e => setInputLink(e.target.value)} required>
                            Link</mobiscroll.Input>
                        </div>
                    </div>
                    <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-col-lg-6">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Resource Type"
                            value={inputResource} onChange={e => setInputResource(e.target.value)} type="text" required>
                            Resource Type</mobiscroll.Input>
                        </div>
                        <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Enter your city"
                            value={inputCity} onChange={e => setInputCity(e.target.value)} type="text" required>
                            City</mobiscroll.Input>
                        </div>
                        <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                            <mobiscroll.Input inputStyle="box" labelStyle="floating" placeholder="Select your country"
                            value={inputCountry} onChange={e => setInputCountry(e.target.value)} type="text" required>
                            Country</mobiscroll.Input>
                        </div>
                    </div>
                    <div className="mbsc-row">
                        <div className="mbsc-col-12 mbsc-col-md-16 mbsc-col-lg-3">
                            <div className="mbsc-btn-group-block">
                                <mobiscroll.Button onClick={sendPost} type="submit" color="success">
                                Submit Details</mobiscroll.Button>
                            </div>
                        </div>
                    </div>
                </div>
            </mobiscroll.Form>
      </div>
      <FlipMove>
      {posts.map(({ id, data: {name, resource, city, country, resourceLink}}) => (
            <Posts
                key={id}
                name={name}
                resource={resource}
                city={city}
                country={country}
                resourceLink={resourceLink}
            />
        ))}
        </FlipMove>
    </div>
  );
}
export default Resources;
