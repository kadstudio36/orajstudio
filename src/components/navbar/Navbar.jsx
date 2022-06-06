import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import './navbar.css';
import logo from '../../assets/orajlogo-full.svg'
import arrowdiago from '../../assets/arrowdiago.svg'
import smallbar from '../../assets/small_bar.svg'


const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#work">Work</a></p>
  <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="oraj__navbar">
      <div className="oraj__navbar-links">
        <div className="oraj__navbar-links_logo">
          <a href="#home"><img src={logo} alt="logo" /></a>
        </div>

      </div>
      <div className="oraj__navbar-consult">
        <div className="oraj__navbar-links_container">
          <Menu />
          </div>
          <img className ="smallbar" src={smallbar} alt="smallbar" />
            <div className="oraj__navbar-consult_button">
                <button type="button">
                  <div className="buttonwhite">
                    <p>Free Consultation</p>
                      <img src={arrowdiago} alt="arrowdiago" />
                  </div>
                </button> 
            </div>
        </div>
        <div className="oraj__navbar-menu">
          {toggleMenu
          ? <HiX color="#3C3C3C" size={35} onClick={() => setToggleMenu(false)}/>
          : <HiMenu color="#3C3C3C" size={35} onClick={() => setToggleMenu(true)}/>
        
        }
        {toggleMenu && (
          <div className="oraj__navbar-menu_container slide-in-left">
            <div className="oraj__navbar-menu_container-links"></div>
            <Menu />
            <div className="sayhello"><h1>Say hello!</h1><h2><a href="mailto:someone@yoursite.com">orajstudio@gmail.com</a></h2></div>
          </div>

        )}
        </div>
      </div>
  )
}

export default Navbar