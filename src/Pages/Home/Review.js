import React from 'react';

const Review = ({ review }) => {
    const { name, description, picture, rating } = review;
    return (
        <div className="card w-80 bg-base-300 shadow-xl">
            <figure className="px-4 pt-8">
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={picture} alt="" />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p><small>{description?.length > 100 ? description.slice(0, 100) + "..." : description}</small></p>
                <div className="rating rating-sm">
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
        </div>
    );
};

export default Review;