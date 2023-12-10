'use client'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './aboutcard.module.css';

const AboutCard = (props) => {
  const [descriptionCollapse, setDescriptionCollapse] = useState(false);

  const { img, heading, description, icon } = props.about;

  const showMore = () => {
    setDescriptionCollapse(true);
  }
  const showLess = () => {
    setDescriptionCollapse(false);
  }
  return (

    <div className={styles['main']}>
      <Image src={img} alt="" height={300} width={350} className={styles['img']} />
      <div>
        <h4>
          <span><img src={icon} alt="" /></span>{heading}
        </h4>
        <p>
          {
            descriptionCollapse ? description : description?.substr(0, 100)
          }
        </p>
        {
          descriptionCollapse ?
            <span onClick={showLess} className="card-link collapse-btn">See Less <FontAwesomeIcon className="icon" icon={faArrowAltCircleLeft} /></span>
            :
            <span onClick={showMore} className="card-link collapse-btn">See More <FontAwesomeIcon className="icon" icon={faArrowAltCircleRight} /></span>
        }

      </div>
    </div>

  );
};

export default AboutCard;