'use client'

import styles from "./servicecard.module.css";
import Image from 'next/image';
import React from 'react';


const ServiceCard = ({img,name,text}) => {

  return (
    <div className={styles["main"]}>
      <Image src={img} alt='' height={300} width={300} style={{borderRadius:'60%'}} />
      <h2>{name}</h2>
      <div>
        <p>
          {text}
        </p>
      </div>
    </div>

  );
};

export default ServiceCard;