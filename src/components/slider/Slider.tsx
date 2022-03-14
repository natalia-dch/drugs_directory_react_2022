// @ts-nocheck
import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Slider.css';


const Slider = (props) => {
       const carouselItems = props.imgSrcs.map(
      (imageSrc)=>{
        return(
        <Carousel.Item interval={1500}>
            <img
              src={imageSrc}
            />
          </Carousel.Item>)});

  return(
    <div className="wrapperS">
    <Carousel className="carousel">
       {carouselItems}
  </Carousel>
  </div>
  )
};

export default Slider;
