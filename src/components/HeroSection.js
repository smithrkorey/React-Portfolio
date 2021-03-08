import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Hello!</h1>
            <p>My name is Korey and I am a Digital Marketing Specialist, UX Designer & Web Developer</p>
            <div className='hero-btn'>
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    Learn More
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
