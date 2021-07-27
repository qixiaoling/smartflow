import React from 'react';
import ReviewCard from "./Component/ReviewCard";
import './Review.css'

function Reivew() {
    return (
        <div className='review-container'>
            <div className='inner-review-container'>
                <h2>What our Clients say about SmartFlow</h2>
                <ReviewCard/>
            </div>



        </div>
    )
}

export default Reivew