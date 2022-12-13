import React, {useState} from 'react'
import './NavbarStyles.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
     const [click, setClick] = useState(false)
     const handleClick = () => setClick(!click)

  return (
    <div className='header'>
       <Link to='/'><h1>Learn React</h1></Link>
       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/prerequisites'>Prerequisites</Link>
        </li>
        <li>
            <Link to='/concepts'>Concepts</Link>
        </li>
        <li>
            <Link to='/references'>References</Link>
        </li>
       </ul>
       <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}}/>)}
       </div>
    </div>
  )
}

export default Navbar