'use client'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react';

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

    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', width:'350px', padding:'2px 20px', flexWrap:'wrap'}}>
      <Image src={img} alt="" height={300} width={350} style={{marginTop:'30px'}}/>
      <div>
        <h4><span><img src={icon} alt=""  /></span>{heading}</h4>
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