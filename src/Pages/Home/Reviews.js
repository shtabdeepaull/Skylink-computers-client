import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className='m-8'>
            <h2 className='text-center text-secondary m-4 text-3xl font-bold'>Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gp-4'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;