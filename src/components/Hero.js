import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {

  return (
    <div className='hero-container' id='hero-container'>
        <h1>Adventure awaits</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
        </div>
    </div>
  )
}

export default Hero;