"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import roboto from '../fonts'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "./service.module.css"

import Image from 'next/image';

import SwiperCore from "swiper/core";
import { Slide } from 'react-reveal';
import { functions } from '../constants';
import ServiceCard from './ServiceCard';

SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);




const Service = () => {
  return (
    <div id='Service' style={{ background: "#FFFCF8" }}>
      <Slide right>
        <div>
          <h1 style={{ padding: '14px 0px', textAlign: 'center' }}>Services</h1>
        </div>

        <div style={{ width: "100%", margin: "50px auto" }}>
          <Swiper
            direction={"horizontal"}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
            }}
            speed={1000}
            className="mySwiper"
          >

            {
              Object.values(functions).map((item, id) => (
                <SwiperSlide key={id} className={styles['main']}>
                  <ServiceCard name={item[0].name} img={item[0].image} text={item[0].text} />
                  <ServiceCard name={item[1].name} img={item[1].image} text={item[1].text} />
                </SwiperSlide>
              ))
            }



          </Swiper>
        </div>
      </Slide>
    </div>
  );
};

export default Service;

