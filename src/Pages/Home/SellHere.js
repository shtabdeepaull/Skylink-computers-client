import React from 'react';
import image from '../../images/sell.png';

const SellHere = () => {
    return (
        <div  className="card mt-8 h-80 lg:card-side bg-base-200 shadow-xl">
            <figure>
                <img className='h-full' src={image} alt="Album"/>

                </figure>
            <div className="card-body ">
                <h2 className="card-title text-center">Sell Your Second Hand Computer Product To Us</h2>
                <p className='w-80'>We are offering for our customers to sell there second hand computer products such as monitor, printer or even laptops. Anyone  can sell there products easily buy just clicking on "sell here". we will receive your product and give you a fare price. </p>
                <div className="card-actions justify-center">
                    <button className="btn btn-secondary">Sell Here</button>
                </div>
            </div>
        </div>
    );
};

export default SellHere;