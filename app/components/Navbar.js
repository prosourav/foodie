'use client'
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import Dropdown from './Dropdown';

const options = [
  { item: "Bengali", menu: "https://drive.google.com/file/d/1DVqcxBx93OKLAnFMR3Nt8LjFDmQApnpD/view" },
  { item: "North Indian", menu: "https://drive.google.com/file/d/1bN-ZSVaYo9CNTboqWmz2Fdj0abEWhfWG/view" }
];

const Navbar = () => {
  const menuItem = ['Home', 'Service', 'About', 'Contact'];

  function handleSelect(option) {
    console.log(option);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="Home" className="navbar-logo">
          <h3 style={{ color: 'white' }}>Spicecraft Catering</h3>
        </Link>
        <ul className="navbar-links">
          {
            menuItem.map(function (item) {
              return <li key={item}><Link href="/" to={item} smooth={true} duration={500} className="navbar-link">{item}</Link></li>
            })
          }
        </ul>
        <Dropdown options={options} onSelect={handleSelect} name={"Get Menus"} />
      </div>
    </nav>
  );
};

export default Navbar;
