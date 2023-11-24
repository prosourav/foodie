import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id='Contact'>
      <div className="container">

        <div className="title">
          {/* <img src={WhiteLogo} alt="Hot Onion White Logo" /> */}
          <h1 style={{ color: 'whitesmoke', color:'red' }}>
            Foodie
          </h1>
          <div style={{display: 'flex', flexDirection:'column'}}>
            <div>
              <FontAwesomeIcon icon={faPhone} color='wheat' />
              <span style={{color:'wheat', paddingLeft:'6px'}}>1234567890 </span>
            </div>
            <div style={{ marginTop: '12px' }}>
              <FontAwesomeIcon icon={faEnvelope} color='wheat' />
              <span style={{ color: 'wheat', paddingLeft: '6px'}}>foodie@gmail.com</span>
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
        <small style={{ textAlign: 'center', color:'gray' }}>Copyright &copy;  {new Date().getFullYear()} Online Food </small>
      </div>

    </footer>
  );
};

export default Footer;