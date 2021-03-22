import React from 'react'
import './Link.css';
export default function Link({url,title}) {
  
  return (
      <a className="link" href={url}>
        {title}
      </a>
  )
}
