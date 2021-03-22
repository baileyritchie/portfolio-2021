import React from 'react'
import Link from '../Link/Link';
import './Error.css';

export default function Error({message}) {
  return (
    <div className="error-container">
      Unable to Load Data: {message}
      <a className="error-link" href="/">Return Home</a>
    </div>
  )
}
