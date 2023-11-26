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
import Image from 'next/image';

import SwiperCore from "swiper/core";
import { Slide } from 'react-reveal';

SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

// import './styles.css';


const functions = {
  "one":
    [{
      name: "Wedding Party",
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Birthday Party",
      image: "https://images.pexels.com/photos/7180857/pexels-photo-7180857.jpeg?auto=compress&cs=tinysrgb&w=600"
    }],
  'two': [{
    name: "Corporate Party",
    image: "https://images.pexels.com/photos/6405769/pexels-photo-6405769.jpeg?auto=compress&cs=tinysrgb&w=600"
  }, {
    name: "Family Party",
    image: "https://images.pexels.com/photos/10033218/pexels-photo-10033218.jpeg?auto=compress&cs=tinysrgb&w=600"
  }]
};



const Service = () => {

  return (
    <div id='Service' style={{ display: "flex", alignItems: "center", flexDirection: "column", background: "#FFFCF8", justifyContent: "space-around", margin: "30px auto" }}>
      <Slide right>
        <div>
          <h1 style={{ margin: "10px auto" }}>Services</h1>
        </div>

        <div style={{ width: "100%", margin: "50px auto" }}>
          <Swiper
            direction={"horizontal"}
            loop={true}
            // pagination={{
            //   clickable: true,
            // }}
            autoplay={{
              delay: 3000,
            }}
            speed={1000}
            className="mySwiper"
          >

            {
              Object.values(functions).map((item, id) => (
                <SwiperSlide key={id} style={{ display: "flex", textAlign: "center", justifyContent: 'space-evenly' }}>
                  <div style={{ display: "flex", textAlign: "center", flexDirection: 'column' }} >

                    <Image src={item[0].image} alt='' height={300} width={300} style={{ borderRadius: '60%', margin: ' 10px auto' }} />
                    <h2 style={{ margin: "10px 0px 2px 0px" }}>{item[0].name}</h2>
                    <div style={{ color: "#493c3c", fontWeight: "500", width: '400px', margin: "0px auto" }}>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequatur culpa? Sapiente ab sed dolore rem molestiae, rerum voluptatem, recusandae maiores porro tempora tempore eveniet aspernatur dignis
                        simos error esse ipsa. </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", textAlign: "center", flexDirection: 'column' }} >


                    <Image src={item[1].image} alt='' height={300} width={300} style={{ borderRadius: '60%', margin: ' 10px auto' }} />
                    <h2 style={{ margin: "10px 0px 2px 0px" }}>{item[1].name}</h2>
                    <div style={{ color: "#493c3c", fontWeight: "500", width: '400px', margin: "0px auto" }}>
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequatur culpa? Sapiente ab sed dolore rem molestiae, rerum voluptatem,
                        recusandae maiores porro tempora tempore eveniet aspernatur dignissimos error esse ipsa.</p>
                    </div>
                  </div>
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


//                 <Image src={item.image} alt='' height={300} width={300} style={{ borderRadius: '60%', margin: ' 10px auto' }} />
//                 <h2 style={{ margin: "10px 0px 2px 0px" }}>{item.name}</h2>
//                 <div style={{ color: "#493c3c", fontWeight: "bold", width: '600px', margin: "0px auto" }}>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequatur culpa? Sapiente ab sed dolore rem molestiae, rerum voluptatem, recusandae maiores porro tempora tempore eveniet aspernatur dignissimos error esse ipsa.
//                 </div>