import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import bground from '../assets/bg.mp4'

const video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={bground} type='video/mp4' />
      </video>
      <div className='content'>
        <h1>Learn React</h1>
        <p>Make your own website.</p>
      </div>
    </div>
  )
}

export default video