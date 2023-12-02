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
      <div id='Home' style={{ backgroundImage: `url(${'https://lerablog.org/wp-content/uploads/2020/03/Types-of-catering-862x485.jpg'})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'space-evenly', height: '90vh', alignItems: 'center' }}>
        <div>
          {/* <div style={{ height: '500px', width: '500px', }}>
            <Image src={'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800'} alt='' height={550} width={550} style={{ borderRadius: '60%' }} /> 
          </div> */}
        </div>
        {/* <div style={{ width: '460px' }}>
          <h1 style={{ color: '#FFF' }}><span >Welcome </span>to the world of tasty food</h1>
          <h4 >Lorem ipsum dolor sit, amet consectetur adipisicing elit.dolor sit, amet consectetur adipisicing elit.dolor sit, amet consectetur adipisicing elit.dolor sit, amet consectetur adipisicing elit. Repellendus voluptatum voluptate vitae cum. Delectus distinctio maxime cumque est nihil ullam veniam possimus!</h4>
          <button style={{ background: 'rgb(0, 133, 255)', cursor: 'pointer', color: 'white', padding: '10px 20px', borderRadius: '6px', border: 'none' }} onClick={() => setIsOpen(true)}>Know More</button>
        </div> */}
      </div>
      <ContactModal {...{ open, setIsOpen }} />

    </>
  );
};

export default Banner;