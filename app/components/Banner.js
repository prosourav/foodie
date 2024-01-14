'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import ImageBr from '/public/Images/foodie/BHETKI BEGUM BAHAR.jpeg';
import backgroundImage from '/public/Images/bannerbackground.png';
import ContactModal from './Modal';
import styles from './banner.module.css'
import { Slide } from 'react-reveal';

export const metadata = {
  title: 'Catering',
  description: ' Authentic Indian cuisine, South Indian food, Bengaali food',
}

const Banner = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <div id='Home' className={styles['main']}>
        <Slide top>
          <div style={{ width: '660px',  padding: '10%' }}>
            <h1 style={{ color: '#fff', padding: '0px', margin: '0px', }}>Welcome to the <span style={{ color: '#fff', fontStyle: 'italic' }}>SpiceCraft Catering</span></h1>
            <p className={styles['para']}>
              Whether it’s a wedding, birthday, or corporate event, we have the perfect catering solution for you. Call us now and get a free quote.
            </p>
            <button style={{ background: 'rgb(0, 133, 255)', cursor: 'pointer', color: 'white', padding: '10px 20px', borderRadius: '6px', border: 'none' }} onClick={() => setIsOpen(true)}>Know More</button>
          </div>
        </Slide>
      </div>
      <ContactModal {...{ open, setIsOpen }} />

    </>
  );
};

export default Banner;