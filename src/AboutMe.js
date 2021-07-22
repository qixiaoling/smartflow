import React from 'react';
import eric from './Assets/eric_IMG_0897.jpg'
import './AboutMe.css'

function AboutMe() {
    return (
        <div className='about-me-container'>
            <div className='pop-up-container'>
                <div className='img-container'>
                    <img src={eric} alt='Eric'/>
                    <div className='pop-up pop-up1'>1</div>
                    <div className='pop-up pop-up2'>2</div>
                    <div className='pop-up pop-up3'>3</div>
                    <div className='pop-up pop-up4'>4</div>
                    <div className='pop-up pop-up5'>5</div>
                </div>
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
                    Fusce ac lorem sit amet elit fermentum tempor sed sit amet lacus. Nam sodales, tellus quis rhoncus
                    commodo, est leo cursus dui, sed luctus lectus eros quis erat. Mauris scelerisque auctor pretium.
                    Phasellus sagittis tempus diam vitae rhoncus. Cras ac dictum orci.
                    Fusce fringilla placerat nunc, eget posuere eros varius vel. Donec non cursus mauris. Sed
                    vestibulum orci velit, vitae fringilla ipsum elementum sit amet. Aliquam vulputate arcu at
                    venenatis laoreet. Morbi egestas est tristique interdum ullamcorper. Sed dapibus
                    eleifend erat, id interdum lorem molestie a. Nam fringilla metus at nisi bibendum, eu euismod diam
                    varius. Aliquam porttitor porttitor maximus.
                </p>

            </div>

        </div>
    )
}

export default AboutMe