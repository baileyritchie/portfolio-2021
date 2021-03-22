import React from 'react'
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-header">Oops! Couldn't find that page</h1>
      <a className="notfound-link" href="/">Return to Home</a>
    </div>
  )
}
