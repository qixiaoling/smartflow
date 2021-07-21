import React from 'react';
import './Button'
import './HeroSection.css'
import {Button} from "./Button";
function HeroSection(){

    function explore(){
        console.log("explore")
    }
    return(
        <div className='hero-container'>
            <video src='./Assets/video.mp4' autoPlay loop muted/>
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