import React from 'react'
import profile from './profile_pic.jpg';
import './About.css';
import {FiGithub,FiLinkedin,FiTwitter} from 'react-icons/fi';

export default function About() {
  return (
    <div className="about-page-container">
    <div className="about-container">
      <div className="about-photo-container">
        <img className="about-photo" src={profile} alt="profile"></img>
      </div>
      <h2 className="about-greeting">Hey there.</h2>
      <div className="descrip">
        <h2 className="descrip-header">I’m Bailey, a full-stack developer obsessed with building and shipping 
        beautiful software. </h2>
        <p className="descrip-main">I am a self-taught developer who has been programming for 2+ years, 
          with a focus on JavaScript. Above all, I love creating code that solves 
          problems and I hope to inspire others to code though my written tutorials 
          and livestreams.
        </p>
      </div> 
      </div>  
      <div className="about-col-container">
        <div className="about-col">
          <h1 className="about-col-header"> Hire Me </h1>
          <p className="about-col-content">I am currently looking for new opportunities. 
          Hire me for your next freelance or full-time role. </p>
          <a className="about-link" href="/contact">Get In Touch</a>
        </div>
        <div className="about-col">
          <h1 className="about-col-header"> For Fun </h1>
          <p className="about-col-content">
            Outside of code, I spend most of my time thinking about and 
            tinkering with new business ideas ( via indiehackers.com & twitter). 
            I love running and am teaching myself how to play Chess in my free time.  
          </p>
        </div>
        <div className="about-col">
          <h1 className="about-col-header"> Connect </h1>
          <p className="about-col-content">
            <p className="about-social-header">Find me online</p>
            <ul className="about-social-container">
              <li className="about-social-link"><FiGithub className="social-icon"/> <a className="about-link" href="https://github.com/baileyritchie">Github</a></li>
              <li className="about-social-link"><FiTwitter className="social-icon"/> <a className="about-link" href="https://twitter.com/baileylritchie">Twitter</a></li>
              <li className="about-social-link"><FiLinkedin className="social-icon"/><a className="about-link" href="https://www.linkedin.com/in/bailey-ritchie-568569142/">LinkedIn</a></li>
            </ul>
          </p>
        </div>
        

      </div>
   
      </div>
  )
}
