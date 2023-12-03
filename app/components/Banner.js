'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import ImageBr from '/public/Images/foodie/BHETKI BEGUM BAHAR.jpeg';
import backgroundImage from '/public/Images/bannerbackground.png';
import ContactModal from './Modal';
import { Slide } from 'react-reveal';

const Banner = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <div id='Home' style={{ backgroundImage: `url(${'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: "center", height: '90vh', alignItems: 'center' }}>
        <div>
          {/* <div style={{ height: '500px', width: '500px', }}>
            <Image src={'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800'} alt='' height={550} width={550} style={{ borderRadius: '60%' }} /> 
          </div> */}
        </div>
        <Slide top>
          <div style={{ width: '660px' }}>
            <h1 style={{ color: '#fff', padding: '0px', margin: '0px', }}>Welcome to the <span style={{ color: '#fff', fontStyle: 'italic' }}>SpiceCraft Catering</span></h1>
            <p style={{ color: 'rgb(215 214 211)', fontFamily: 'sans-serif', fontStyle: 'oblique' }}>
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