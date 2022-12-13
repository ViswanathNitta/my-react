import React from 'react'
import './FooterStyles.css'
import { FaMailBulk, FaPhone, FaSearchLocation} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                    <div>
                     <p>A-B/CD</p>
                     <h4>ABCDEF</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>+91-9988776655</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>abcd.react@abcd.com</h4>
                </div>
            </div>
        <div className='right'>
            <h4>About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
               sed do eiusmodtempor incididunt ut labore et dolore magna 
               aliqua. Ut enim ad minim veniam,quis nostrud exercitation 
               ullamco laboris nisi ut aliquip ex ea commodoconsequat.
            </p>
        </div>   
        </div>
    </div>    
  )
}

export default Footer