import React from 'react';
import './hero.css';

const Hero = (props) => {
  return (
    <img class = "hero-img-content" src = {props.heroImg.heroImgMain.url} />            
    );
  }

export default Hero; 