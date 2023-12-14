"use client"

import { faEnvelope, faPhone, faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import ContactModal from './Modal';
import styles from './footer.module.css'
import { FaFacebook } from 'react-icons/fa';
import Image from 'next/image';


const Footer = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <footer className={styles["footer"]} id='Contact'>
      <ContactModal {...{ open, setIsOpen }} />
      <div className={styles["container"]}>

        <div className="title">
          {/* <img src={WhiteLogo} alt="Hot Onion White Logo" /> */}
          <h3 className={styles['logo']}>
            Spicecraft Catering
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <FontAwesomeIcon icon={faPhone} color='wheat' />
              <span style={{ color: 'wheat', paddingLeft: '6px' }}>+61 431015301 </span>
            </div>
            <div style={{ marginTop: '12px' }}>
              <FontAwesomeIcon icon={faEnvelope} color='wheat' />
              <a href='mailto:contacts@spicecraftcatering.com.au' style={{ color: 'wheat', paddingLeft: '6px' }}>contacts@spicecraftcatering.com.au</a>
            </div>
            {/* <button style={{ background: 'rgb(0, 133, 255)', cursor: 'pointer', color: 'white', padding: '10px 20px', borderRadius: '6px', border: 'none' }} onClick={() => setIsOpen(true)}>Know More</button> */}

            <div className={styles["contact"]} onClick={() => setIsOpen(true)}>
              <FontAwesomeIcon icon={faShareFromSquare} color='wheat' />
              <span style={{ color: 'wheat', paddingLeft: '6px', cursor:'pointer' }}>Feel free to do  any query</span>
            </div>

            <div className={styles["contact"]}>
              <a href="https://www.facebook.com/profile.php?id=61554094402898" target='_blank' style={{textDecoration:'none'}}>
                <Image height={200} width={200} src="https://img.icons8.com/android/22/4a90e2/facebook-new.png" alt='' className='logo-footer' style={{ width: '20px', height: '18px' }} />
                <span style={{ color: 'wheat', paddingLeft: '8px', position:'relative', top:'-2px' }}>Follow us on facebook</span>
              </a>
            </div>

          </div>
        </div>
        <div className={styles["col-2"]}>
          <ul className={styles["col-inner"]}>
            <Link href="/" className='anc'>About Online Food</Link>
            <Link href="/" className='anc'>Read Our Blog</Link>
            <Link href="/" className='anc'>Sign up href deliver</Link>
            <Link href="/" className='anc'>Add your restaurant</Link>
          </ul>
        </div>
        <div className={styles["col-2"]}>
          <ul className={styles["col-inner"]}>
            <Link href="/" className='anc'>Get Help</Link>
            <Link href="/" className='anc'>Read FAQ</Link>
            <Link href="/" className='anc'>View All Cities</Link>
            <Link href="/" className='anc'>Restaurants near me</Link>
          </ul>
        </div>
      </div>
      <div className={styles['footer-wrapper']}>
        <small className={styles['footer-text']}>Copyright &copy;  {new Date().getFullYear()} Spicecraft Catering </small>
      </div>

    </footer>
  );
};

export default Footer;