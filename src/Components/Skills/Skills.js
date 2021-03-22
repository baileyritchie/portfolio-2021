import React from 'react';
import './Skills.css';
import {BsCaretRightFill} from 'react-icons/bs';
export default function Skills() {
  return (
    <div className="projects-page">
      <h1 className="projects-header">Skills</h1>
      <p className="skills-intro">Building performant and saclable applications requires a variety of skills and tools. Here are some I use everyday.</p>
      <div className="projects-container">
        <div className="skills-container">
          <h2 className="skills-header">Languages</h2>
          <ul className="skills-list">
            <li className="skill-item"> <BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>JavaScript ES6</li>
            <li className="skill-item"> <BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>Python</li>
          </ul>
        </div>
        <div className="skills-container">
          <h2 className="skills-header">Back-End</h2>
          <ul className="skills-list">
            <li className="skill-item"> <BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>Node & Express</li>
            <li className="skill-item"> <BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>GraphQL</li>
            <li className="skill-item"> <BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>SQL</li>
            <li className="skill-item"> <BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>MySQL/PostgresSQL</li>
            <li className="skill-item"> <BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>MongoDB</li>
          </ul>
        </div>
        <div className="skills-container">
          <h2 className="skills-header">Frontend</h2>
          <ul className="skills-list">
            <li className="skill-item"><BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>HTML, CSS</li>
            <li className="skill-item"><BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>React, Next.JS</li>
            <li className="skill-item"><BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>Bootstrap, Tailwind CSS</li>
            <li className="skill-item"><BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>Styled Components</li>
            <li className="skill-item"><BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>Redux, Apollo</li>  
          </ul>
        </div>
        <div className="skills-container">
          <h2 className="skills-header">Other Tools</h2>
          <ul className="skills-list">
            <li className="skill-item"> <BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>Git (Github)</li>
            <li className="skill-item"><BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>NPM</li>
            <li className="skill-item"><BsCaretRightFill size={17} style={{"margin-right":"2px"}}/>Deploying on Vercel, Netlify, Heroku</li>
          </ul>
        </div>
        </div>
        <h1 className="certification-header">Certifications</h1>
        <div className="certification-container">
          <h2 className="subcert-header">AWS</h2>
          <ul className="certification-list">
            <li className="certification-item"> <BsCaretRightFill size={17} style={{"margin-right":"2px"}}/> Associate Solutions Architect - 3/15/2021</li>
          </ul>
        </div>
        
    </div>
  )
}