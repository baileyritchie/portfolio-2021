import React from 'react'
import loading from './loading.png';
import './Loading.css';

export default function Loading() {
  return (
    <div className="loading-container">
      <img src={loading} alt="loading" width="70" height="70" className="rotate"/>
    </div>
  )
}
