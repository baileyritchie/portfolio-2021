import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import './Navbar.css';

export default function Navbar({logoName,navData,style}) {
  const [click,setClick] = useState(false);
  const [button,setButton] =  useState(true);
  const [iconColor,setIconColor] =  useState('#303030');
  const [scrolled,setScrolled] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else setButton(true);
  }
  const styleChecker = (style) => {
    if (style === 'primary') {
      setIconColor('#ebebeb');
    } else if (style ===  'dark')  {
      setIconColor('#ebebeb');
    } else if (style === 'light') {
      setIconColor('#303030');
    }  else setIconColor('#303030');
  }
  const changeNavbar = () => {
    if (window.scrollY > 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  useEffect(() =>  {
    showButton();
    styleChecker(style);
  },[style]);
  window.addEventListener('resize', showButton);
  window.addEventListener('scroll', changeNavbar);
  
  return (
    <IconContext.Provider value={{color:iconColor}}>
      <div className={`navbar ${style ? 'navbar--'+style : ''} ${scrolled? "active": ""}`} >
        <div className="navbar-container container">
          <Link className={`navbar-logo ${style ? 'navbar-logo--'+style : ''}`} to="/">
            <h1>{logoName}</h1>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes/>  : <FaBars/>}
          </div>
          <ul className={click ? `nav-menu ${style ? 'nav-menu--'+style  : '' } active` : "nav-menu"}>
            {navData.map((link) => (
              <li className="nav-item">
                  <Link className={`nav-links ${style ? 'nav-links--'+style : ''}`} to={link.to} onClick={closeMobileMenu} key={link.name}>{link.name}</Link>
              </li>)
            )}
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  )
}
