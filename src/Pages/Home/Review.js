import React from 'react';

const Review = ({ review }) => {
    const { name, description, picture, rating } = review;
    return (
        <div class="card w-80 bg-base-300 shadow-xl">
            <figure class="px-4 pt-8">
                <div class="avatar">
                    <div class="w-12 rounded-full">
                        <img src={picture} alt="" />
                    </div>
                </div>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p><small>{description?.length > 100 ? description.slice(0, 100) + "..." : description}</small></p>
                <p><div class="rating rating-sm">
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked/>
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                </div></p>
            </div>
        </div>
    );
};

export default Review;