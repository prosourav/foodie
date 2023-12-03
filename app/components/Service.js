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
      text: "Make your wedding day truly unforgettable with our exquisite catering services. We specialize in crafting culinary masterpieces that will tantalize your guests' taste buds and leave a lasting impression. From intimate gatherings to grand celebrations, our team of experienced chefs will tailor a menu to your unique tastes and preferences."
    },
    {
      name: "Birthday Party",
      image: "https://images.pexels.com/photos/7180857/pexels-photo-7180857.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "We are the ideal catering service for your birthday party. We specialize in making your party fun and memorable with a wide range of menu and service options. We also offer other services, such as balloons, games, and entertainment, to make your party more enjoyable. Contact us today and let us handle everything for you. Catering Solutions: the ideal choice for your birthday party."
    }],
  'two': [{
    name: "Corporate Party",
    image: "https://images.pexels.com/photos/6405769/pexels-photo-6405769.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "We are the perfect catering service for your corporate party. We offer professional, reliable, and affordable services for any event. We have a variety of menus and services to suit your needs. We also provide customized services, such as theme-based decorations, live music, and entertainment. Contact us today and let us make your party a success. Catering Solutions: the best choice for your corporate party."
  }, {
    name: "Family Party",
    image: "https://images.pexels.com/photos/10033218/pexels-photo-10033218.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Make your next family gathering a truly special occasion with our exceptional catering services. We specialize in creating delectable dishes that will bring your family together and leave everyone wanting more.From backyard barbecues to elegant dinner parties, our team of experienced chefs will create a menu that perfectly reflects your family's unique tastes and preferences.Contact us today to let us take care of the culinary details so you can focus on creating lasting memories with your loved ones."
  }]
};



const Service = () => {

  return (
    <div id='Service' style={{ display: "flex", alignItems: "center", flexDirection: "column", background: "#FFFCF8", justifyContent: "space-around", padding: "30px auto" }}>
      <Slide right>
        <div>
          <h1 style={{ margin: "50px auto" }}>Services</h1>
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
                    <div style={{ color: "#493c3c", fontWeight: "500", width: '600px', margin: "0px auto" }}>
                      <p>
                        {item[0].text}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", textAlign: "center", flexDirection: 'column' }} >


                    <Image src={item[1].image} alt='' height={300} width={300} style={{ borderRadius: '60%', margin: ' 10px auto' }} />
                    <h2 style={{ margin: "10px 0px 2px 0px" }}>{item[1].name}</h2>
                    <div style={{ color: "#493c3c", fontWeight: "500", width: '540px', margin: "0px auto", }}>
                      <p> 
                        {item[1].text}
                      </p>
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