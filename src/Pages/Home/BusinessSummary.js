import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h4 className='text-3xl text-secondary text-center font-bold mt-8'>We Shoot Trouble!!</h4>
            <p className='text-center'><small>We are highly enthusiastic when it's about fixing our clients problems.</small></p>
           <div className='flex justify-evenly m-4'>
               <div className='text-center'>
               <i className="fa-solid text-secondary fa-4x fa-thumbs-up  "></i>
               <p>200+</p>
               <p>Feedbacks</p>
               </div>
               <div className='text-center'>
               <i className="fa-solid  text-secondary fa-4x fa-screwdriver-wrench"></i>
               <p>500+</p>
               <p>Services</p>
               </div>
               <div className='text-center'>
               <i class="fa-solid text-secondary fa-4x fa-money-check-dollar"></i>
                <p>1000+</p>
                <p>Purchase</p>
               </div>
           </div>
        </div>
    );
};

export default BusinessSummary;