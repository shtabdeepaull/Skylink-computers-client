import React from 'react';
import banner from '../../../src/images/banner.png';

const Banner = () => {
  return (
    <div  className="hero min-h-80 bg-base-100">
      <div  className="hero-content flex-col lg:flex-row">
        <img src={banner}  className="max-w-sm w-full rounded-lg shadow-2xl" />
        <div>
          <h1  className="ml-6 text-3xl text-secondary text-center font-bold">We’re on a mission to put a computer on every desk!</h1>
          <p  className="py-4 text-center text-xl ml-6">Our vision is to be earth’s most customer-centric company, where customers can find and discover anything they might want to buy online.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;