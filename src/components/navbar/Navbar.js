import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.scss';

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whatIsGPT?">What is GPT3?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__linksContainer">
          <Menu />
        </div>
      </div>
      <div className="navbar__sign">
        <p>Sign In</p>
        <button type="sign up">Sign Up</button>
      </div>

      {/* ============ start mobile menu ============ */}

      <div className="navbar__mobileMenu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="mobileMenu__container scale-up-center">
            <div className="mobileMenu__navLinks">
              <Menu />
              <div className="mobileMenu__sign">
                <p>Sign In</p>
                <button type="sign up">Sign Up</button>
                </div>
            </div>
          </div>
        )}
      </div>
      {/* ============= End Mobile Menu =========== */}
    </div>
  );
};

export default Navbar;
