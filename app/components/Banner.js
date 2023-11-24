'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import ImageBr from '/public/Images/foodie/BHETKI BEGUM BAHAR.jpeg';
import backgroundImage from '/public/Images/bannerbackground.png';
import ContactModal from './Modal';

const Banner = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <ContactModal {...{ open, setIsOpen }} />
      <div style={{ backgroundImage: `url(${backgroundImage.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '600px', display: 'flex', justifyContent: 'space-evenly', height: '80vh', alignItems: 'center' }}>
        <div>
          <div style={{ height: '500px', width: '500px', }}>
            <Image src={ImageBr} alt='' height={550} width={550} style={{ borderRadius: '60%' }} />
          </div>
        </div>
        <div style={{ width: '460px' }}>
          <h1><span style={{ color: 'red' }}>Welcome </span>to the world of tasty food</h1>
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.dolor sit, amet consectetur adipisicing elit.dolor sit, amet consectetur adipisicing elit.dolor sit, amet consectetur adipisicing elit. Repellendus voluptatum voluptate vitae cum. Delectus distinctio maxime cumque est nihil ullam veniam possimus!</h4>
          <button style={{ background: 'rgb(0, 133, 255)', cursor: 'pointer', color: 'white', padding: '10px 20px', borderRadius: '6px', border: 'none' }} onClick={() => setIsOpen(true)}>Know More</button>
        </div>
      </div>
    </>
  );
};

export default Banner;