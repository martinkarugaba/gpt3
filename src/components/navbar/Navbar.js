import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  return <div className='gpt__navbar'>
    <div className="gpt__navbar-links">
      <div className="gpt3__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  </div>;
};

export default Navbar;
