import React,{useState} from 'react'
import './Contact.css'
import {FiLinkedin,FiTwitter,FiGithub} from 'react-icons/fi';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [formStatus, handleFormStatus] = useForm("xdoynkgz");
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [message,setMessage] = useState("");
  
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const onNameChange = (e) => {
    setName(e.target.value);
  }
  const onMessageChange = (e) => {
    setMessage(e.target.value)
  }
  if (formStatus.succeeded) {
    return (
      <div className="contact-page">
        <div className="thankyou-container">
          <p className="contact-thankyou"> Thank you for your message! I will get back to you shortly.</p>
        </div>
      </div>);
  }
  return (
    <div className="contact-page">
      <div className="contact-container">
      <div className="contact-mini-header">Get in Touch</div>
      <div className="contact-header"> Say Hello!
      </div>
      <div className ="contact-subheader">
        If you'd like to send me a message, I can be reached through various ways. 
        If you prefer email, simply fill out the form below or send me a message directly at baileylritchie@gmail.com. 
        {/*For quick access, you can also find my <a className="contact-link" href="http://resume.com">resume</a> here.*/}
        Thank you!
      </div>
      <div className="contact-content-container">
          <form className="contact-form" onSubmit={handleFormStatus}>
            <label className="contact-label" htmlFor="name">Name</label>
            <input id="name" type="text" name="name" className="contact-input" onChange={onNameChange} value={name}></input>
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={formStatus.errors}
            />
            <label className="contact-label">Email</label>
            <input required={true}name="email" type="email" className="contact-input" onChange={onEmailChange} value={email}></input>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={formStatus.errors}
            />
            <label className="contact-label">Message</label>
            <textarea required={true} name="message" type="text" className="contact-input-message" onChange={onMessageChange} value={message}></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={formStatus.errors}
            />
            <button className="contact-send-message" type="submit" disabled={formStatus.submitting}> Send Message </button>
          </form>
          <div className="contact-socials">
            <p className="contact-social-descrip">Elsewhere, I can be found at the following:</p>
            <ul className="about-social-container">
              <li className="about-social-link"><FiGithub className="social-icon"/> <a className="about-link" href="https://github.com/baileyritchie">Github</a></li>
              <li className="about-social-link"><FiTwitter className="social-icon"/> <a className="about-link" href="https://twitter.com/baileylritchie">Twitter</a></li>
              <li className="about-social-link"><FiLinkedin className="social-icon"/><a className="about-link" href="https://www.linkedin.com/in/bailey-ritchie-568569142/">LinkedIn</a></li>
            </ul>
          </div>
      </div>
      </div>
    </div>
  )
}
