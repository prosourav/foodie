'use client'
import Link from 'next/link';
import React from 'react';
// import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          {/* <img src="/logo.svg" alt="Foodie Logo" /> */}
          Foodie
        </Link>
        <ul className="navbar-links">
          <li>
            <Link href="/menu" className="navbar-link">Menu</Link>
          </li>
          <li>
            <Link href="/about" className="navbar-link">About</Link>
          </li>
          <li>
            <Link href="/contact" className="navbar-link">Contact</Link>
          </li>
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
