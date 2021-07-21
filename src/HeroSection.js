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
            <Button
                className = 'btn'
                buttonSize='btn-medium'
                buttonStyle='btn-outline'
                onClick={()=> explore()}

            >
                Explore
            </Button>
        </div>
    )
}
export default HeroSection