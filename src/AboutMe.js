import React from 'react';
import eric from './Assets/eric_IMG_0897.jpg'
import './AboutMe.css'

function AboutMe() {
    return (
        <div className='about-me-container'>
            <div className='pop-up-container'>
                <div className='img-container'>
                    <img src={eric} alt='Eric'/>
                </div>
                <button className='high-light-button'>
                    Hightlights
                </button>
            </div>
            <div className='text-container'>
                <h2>Hi I am Eric van Doorn</h2>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, justo at
                    consequat sagittis, leo est tincidunt velit, eget consectetur neque turpis a ex. Mauris ut
                    molestie nibh, eget facilisis risus. Proin sed mollis dolor. Morbi elementum massa nulla,
                    eu rhoncus nisl vulputate et. Ut aliquet laoreet gravida. Praesent erat sem, fringilla tempor est
                    vel, consequat viverra odio. Ut sit amet tellus venenatis, volutpat est et, posuere neque. Donec
                    ut consectetur est. Pellentesque semper tempor arcu quis imperdiet.
                    Integer sed placerat mi. In ultrices turpis eget pretium gravida.
                </p>
                <br/>
                <p>
                    Ut aliquet laoreet gravida. Praesent erat sem, fringilla tempor est
                    vel, consequat viverra odio. Ut sit amet tellus venenatis, volutpat est et, posuere neque. Donec
                    ut consectetur est. Pellentesque semper tempor arcu quis imperdiet.
                    Integer sed placerat mi.
                </p>


            </div>

        </div>
    )
}

export default AboutMe