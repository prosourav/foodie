'use client'
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
  const menuItem = ['Menu', 'About', 'Contact'];
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          {/* <img src="/logo.svg" alt="Foodie Logo" /> */}
          <h3 style={{ color: 'white' }}>Foodie</h3>
        </Link>
        <ul className="navbar-links">
          {
            menuItem.map(function (item) {
              return <li key={item}><Link href="/" to={item} smooth={true} duration={500} className="navbar-link">{item}</Link></li>
            })
          }
        </ul>
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
