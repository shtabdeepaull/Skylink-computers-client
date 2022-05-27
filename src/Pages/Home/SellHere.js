import React from 'react';
import image from '../../images/sell.png';

const SellHere = () => {
    return (
        <div  className="card mt-8 h-80 lg:card-side bg-base-200 shadow-xl">
            <figure>
                <img className='h-full' src={image} alt="Album"/>

                </figure>
            <div className="card-body ">
                <h2 className="card-title text-center">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default SellHere;