import React from 'react';
import {reviews} from "./Assets/ReviewData";
import './Review.css'
function Reivew() {
    return(
        <div className='review-container'>
            <div className='inner-review-container'>
                <h2>See What the Client Has Said</h2>
            </div>
            <div className='item-container'>
                {reviews.map((review, index)=>{
                    const {name, job, image, text} = review
                    return(
                        <>
                            {/*<img src={image} />*/}
                            <h3>{name}</h3>
                            <p>{job}</p>
                            <p>
                                {text}                            </p>
                        </>

                    )
                })}

                <div className='button-container'>
                    <div><i className="fas fa-arrow-left"></i></div>
                    <div><i className="fas fa-arrow-right"></i></div>
                </div>
                <button className='know-more-button'>
                    Know More
                </button>

            </div>
        </div>
    )
}
export default Reivew