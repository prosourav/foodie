'use client'

import React, { useState } from 'react';
import AboutCard from './AboutCard';
import Chef from '/public/Images/Image/chef-cook-food.png';
import HomeDel from '/public/Images/Image/home-delivery.png';
import FastDel from '/public/Images/Image/fast-delivery.png';
import Image from 'next/image';
import styles from "./about.module.css"
import { Slide } from 'react-reveal';

const About = () => {
  const [about, setAbout] = useState([
    { _id: 1, heading: 'A good auto responder', img: Chef, description: 'Thank you for contacting Catering Solutions. We are a catering service that can make your party a success. We offer a variety of menus and services to suit your needs. We will get back to you as soon as possible. Catering Solutions: the best choice for your party.' },
    { _id: 2, heading: 'Home delivery', img: HomeDel, description: 'We offer a variety of catering options for any occasion, and we can also deliver your delicious feast right to your doorstep. Our friendly and efficient staff will bring the culinary experience straight to you, so you can enjoy your special event' },
    { _id: 3, heading: 'Quick delivery', img: 'https://millionmilesecrets.com/wp-content/uploads/Food-delivery-11.jpg', description: 'Enjoy delectable dishes without compromising on time. We offer a variety of catering options, delivered promptly to your doorstep. Our efficient team ensures your culinary experience arrives fresh and on time.' }
  ]);

  return (
    <div className={styles['parent']} id='About'>
      <Slide left>
      <div className={styles['wrapper']}>
        <div className={styles['small-d']}>
          <h1 className='red-col'>Why To Choose Us</h1>
          <p className='about-text'>
            When it comes to your special occasion, choose a catering service that goes beyond ordinary. Our team of passionate culinary experts is dedicated to creating unforgettable experiences that will tantalize your taste buds and leave a lasting impression on your guests. We use only the freshest ingredients and time-honored techniques to craft exquisite dishes that are not only delicious but also visually stunning.

            With our extensive experience and unwavering commitment to quality, we ensure that your event is seamlessly catered from start to finish.
          </p>
        </div>
        <div className={styles['card-wrapper']}>
          {
            about.map(about => <AboutCard key={about._id} about={about}></AboutCard>)
          }
        </div>
      </div>
      </Slide>
    </div>
  );
};

export default About;