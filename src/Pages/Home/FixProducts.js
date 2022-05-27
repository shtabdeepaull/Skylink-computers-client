import React from 'react';
import picture from '../../images/electronic-repair-shop-insurance-header.png';

const FixProducts = () => {
    return (
        <div className="hero mt-8 mb-8 bg-cover h-96" style={{
            background: `url(${picture})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <div  className="hero-overlay bg-opacity-60"></div>
            <div  className="hero-content text-secondary text-center">
                <div  className="max-w-md">
                    <h1  className="mb-5 text-5xl font-bold">Fix Anything</h1>
                    <p  className="mb-5">Either it's your laptop or any computer part, we fix everything at a fare price.</p>
                    <button  className="btn btn-primary">Get In Touch</button>
                </div>
            </div>
           <div className='flex text-center justify-evenly mt-8'>
           <div>
                <p><i className="fa-solid mt-60 text-secondary fa-2x fa-laptop"></i></p>
                <p className=' ml-8 text-secondary'>Laptop Repair</p>
            </div>
            <div>
            <p><i  className="fa-solid mt-60 text-secondary fa-2x fa-mobile-screen"></i></p>
            <p className=' ml-8 text-secondary'>Smartphone Repair</p>
            </div>
            <div>
                <p><i  className="fa-solid mt-60 text-secondary fa-2x fa-desktop"></i></p>
                <p className=' ml-8 text-secondary'>Computer Repair</p>
            </div>
           </div>
        </div>
    );
};

export default FixProducts;