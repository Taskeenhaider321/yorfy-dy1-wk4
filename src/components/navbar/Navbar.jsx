import React, {useState} from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logo.svg';

import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src = {logo} alt="logo"/>
            <p>YORFY</p>
          </div>
          <div className="gpt3__navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#nftp">NFTP</a></p>
            <p><a href="#roadmap">Roadmap</a></p>
            <p><a href="#about">About Us</a></p>
            <p><a href="#contact">Contact Us</a></p>
            <p><a href="#page">Pages</a></p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <button type="button" className="navbar__button">Join Us</button>
        </div>
        <div className="gpt3__navbar-menu">
            {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
            }
            {toggleMenu && (
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <p><a href="#home">Home</a></p>
                  <p><a href="#wgpt3">What is GPT?</a></p>
                  <p><a href="#possibility">Open AI</a></p>
                  <p><a href="#features">Case Studies</a></p>
                  <p><a href="#blog">Library</a></p>
                  <div className="gpt3__navbar-menu_container-links-sign">
                    <button type="button">Sign up</button>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
  );
};

export default Navbar;