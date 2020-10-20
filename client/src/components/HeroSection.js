import React from 'react';
import {Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';

import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-container'>
      {/* <video src="/videos/video-2.mp4" autoplay loop muted /> */}
      <h3>Wholesome Meals In a Snap</h3>
      <p>What are you waiting for</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
        Plans
        </Button> 
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
        <Link to='/recipe' className='btn-mobile'>Recipies</Link> 
        {/* <i className='far fa-play-circle' /> */}
        </Button>
      </div>
    </div>
  ) 
}

export default HeroSection
