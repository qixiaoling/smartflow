import React from 'react';
import {reviews} from '../Assets/ReviewData'

function ReviewCard() {
    return (
        <div className='item-container'>
            {reviews.map((review, index) => {
                const {name, job, text, image} = review;
                return (
                    <div key={index}>
                        {/*<img src={image} alt='name'/>*/}
                        <h3>{name}</h3>
                        <p>{job}</p>
                        <p>{text}</p>
                    </div>

                )
            })}


        </div>
    )
}


export default ReviewCard