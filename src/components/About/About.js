import React from 'react';
import './About.css';
import image from '../../assets/image.png';

function About() {
  return (
    <div className="about">
        <div className="container__about">
            <img className="image__about" src={image} alt="COVID-19" />
        </div>
        <div className="about__text__headline">
            <h2>Helpline Initiative : An effort towards a Better Future</h2>
        </div>
        <div className="about__text__content">
            <p>
                The Pandemic has been tough for everyone, both physically and mentally. 
                And in order to end this pandemic, its important that we come out and help 
                our friends in need as much as possible let that be through Social Media, by 
                spreading awareness about resources or by financially helping someone. 
                <br/>
                <br/>
                This Website is another effort from our end by which you can help people 
                by uploading any kind of information you have about resources like 
                oxygen cylinders or vaccine availablility or some other medical facilities. 
                Also you can help someone financially by donating some amount which will 
                be directly transferred to there account, and in case you are in need of
                finances, you can also ask for some amount.
                <br />
                <br />
                In Order to make situations normal again, we need to keep our spirits 
                high and fight this pandemic together.
            </p>
        </div>
        <div className="about__below__images">
            <div className="about__below__images__1">
                <img src="https://cdn.pixabay.com/photo/2020/03/31/07/56/face-mask-4986596__340.jpg" alt="1"/>
            </div>
            <div className="about__below__images__2">
                <img src="https://cdn.pixabay.com/photo/2020/03/26/22/57/hand-sanitizer-4972049__340.png" alt="2"/>
            </div>
            <div className="about__below__images__3">
                <img src="https://cdn.pixabay.com/photo/2020/03/17/07/44/covid-19-4939288__340.jpg" alt="3"/>
            </div>
        </div>
    </div>
  )
}

export default About;
