'use client'
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import Dropdown from './Dropdown';

const options = ["Bengali", "North Indian"];

const Navbar = () => {
  const menuItem = ['Home', 'About', 'Service', 'Contact'];

  function handleSelect(option) {
   console.log(option);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <h3 style={{ color: 'white' }}>Logo Moho The Caterer</h3>
        </Link>
        <ul className="navbar-links ml-auto">
          {
            menuItem.map(function (item) {
              return <li key={item}><Link href="/" to={item} smooth={true} duration={500} className="navbar-link">{item}</Link></li>
            })
          }
        </ul>
        <Dropdown options={options} onSelect={handleSelect} name={"Get Menus"} />
        <button className="navbar-toggle" onClick={() => {
          document.querySelector('.navbar-links').classList.toggle('active');
        }}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
