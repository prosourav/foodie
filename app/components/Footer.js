"use client"

import { faEnvelope, faPhone, faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import ContactModal from './Modal';


const Footer = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <footer className="footer" id='Contact'>
      <ContactModal {...{ open, setIsOpen }} />
      <div className="container">

        <div className="title">
          {/* <img src={WhiteLogo} alt="Hot Onion White Logo" /> */}
          <h3 style={{ color: 'whitesmoke', color: 'red' }}>
            Moho The Caterer
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <FontAwesomeIcon icon={faPhone} color='wheat' />
              <span style={{ color: 'wheat', paddingLeft: '6px' }}>+61 431015301 </span>
            </div>
            <div style={{ marginTop: '12px' }}>
              <FontAwesomeIcon icon={faEnvelope} color='wheat' />
              <span style={{ color: 'wheat', paddingLeft: '6px' }}>mohothecatrer@gmail.com</span>
            </div>
            {/* <button style={{ background: 'rgb(0, 133, 255)', cursor: 'pointer', color: 'white', padding: '10px 20px', borderRadius: '6px', border: 'none' }} onClick={() => setIsOpen(true)}>Know More</button> */}

            <div style={{ marginTop: '12px', cursor: 'pointer' }} onClick={() => setIsOpen(true)}>
              <FontAwesomeIcon icon={faShareFromSquare} color='wheat' />
              <span style={{ color: 'wheat', paddingLeft: '6px' }}>Fell free to do  any query</span>
            </div>


          </div>
        </div>
        <div className="col-1">
          <ul className="col-inner">
            <Link href="/" className='anc'>About Online Food</Link>
            <Link href="/" className='anc'>Read Our Blog</Link>
            <Link href="/" className='anc'>Sign up href deliver</Link>
            <Link href="/" className='anc'>Add your restaurant</Link>
          </ul>
        </div>
        <div className="col-2">
          <ul className="col-inner">
            <Link href="/" className='anc'>Get Help</Link>
            <Link href="/" className='anc'>Read FAQ</Link>
            <Link href="/" className='anc'>View All Cities</Link>
            <Link href="/" className='anc'>Restaurants near me</Link>
          </ul>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '6%', paddingTop: '50px' }}>
        <small style={{ textAlign: 'center', color: 'gray' }}>Copyright &copy;  {new Date().getFullYear()} Moho The Caterer </small>
      </div>

    </footer>
  );
};

export default Footer;