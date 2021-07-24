import React, {useState, useEffect} from 'react';
import {reviews} from '../Assets/ReviewData'

function ReviewCard() {
    const [index, setIndex] = useState(0);
    const {name, job, text, image} = reviews[index];


    return (
        <div className='item-container'>
            <img src={image}
                 alt={name}
                 className='person-img'
            />
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='review-btn'>
                    <i className="fas fa-arrow-left"></i>
                </button>

                <button className='review-btn'>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>


        </div>
    )
}


export default ReviewCard