'use client'
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import Dropdown from './Dropdown';


export const metadata = {
  title: 'Some Cuisons',
  description: 'kebab, biriyani, elish, hilsa, katla, fishfry, chicken, mutton etc'
}


const options = [
  { item: "Bengali", menu: "https://drive.google.com/file/d/1R3pW7fVBsmfZowo0vUiUcYNbjHpDuBa1/view?usp=sharing" },
  { item: "North Indian", menu: "https://drive.google.com/file/d/1DDLPUoH6Hqem0nhEr6DBG-aZu-Hlq_kg/view?usp=sharing" }
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
