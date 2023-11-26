'use client'

import React, { useState } from 'react';
import AboutCard from './AboutCard';
import Chef from '/public/Images/Image/chef-cook-food.png';
import HomeDel from '/public/Images/Image/home-delivery.png';
import FastDel from '/public/Images/Image/fast-delivery.png';
import Image from 'next/image';
import { Slide } from 'react-reveal';

const About = () => {
  const [about, setAbout] = useState([
    { _id: 1, heading: 'A good auto responder', img: Chef, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, accusantium? Accusantium, corrupti consequuntur repellat iure quia corporis aspernatur ut veniam nostrum quisquam!' },
    { _id: 2, heading: 'Home delivery', img: HomeDel, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, accusantium? Accusantium, corrupti consequuntur repellat iure quia corporis aspernatur ut veniam nostrum quisquam!' },
    { _id: 3, heading: 'Quick delivery', img: FastDel, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, accusantium? Accusantium, corrupti consequuntur repellat iure quia corporis aspernatur ut veniam nostrum quisquam!' }
  ]);

  return (
    <div style={{ padding: '10px 40px' }} id='About'>
      <Slide left>
      <div style={{padding: '1px 70px'}}>
        <h1>Why To Choose Us</h1>
        <p className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, culpa recusandae consectetur exercitationem autem perspiciatis amet unde accusamus possimus vitae rerum laborum  sit amet consectetur adipisicing elit. Doloribus,  nostrum
          ipsum!
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent:'center'}}>
        {
          about.map(about => <AboutCard key={about._id} about={about}></AboutCard>)
        }
      </div>
        </Slide>

    </div>
  );
};

export default About;