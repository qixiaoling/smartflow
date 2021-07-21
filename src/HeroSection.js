import React from 'react';
import './Button'
import './HeroSection.css'
import {Button} from "./Button";
import videoDigit from './Assets/video.mp4'


function HeroSection(){

    function explore(){
        console.log("explore")
    }
    return(
        <div className='hero-container'>
            <video
            autoPlay loop muted
            >
                <source src={videoDigit} type='video/mp4'/>
            </video>

            <h1>What's Your Next Move?</h1>
            <br/>
            <Button
                className='btn'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                data-testid='test'
            >
                Explore
            </Button>
        </div>
    )
}
export default HeroSection