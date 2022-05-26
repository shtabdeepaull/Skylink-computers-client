import React from 'react';
import errorPic from '../../images/404.png';

const NotFound = () => {
    return (
        <div className='m-4'>
            <img className="w-full h-64"  src={errorPic} alt="" />
        </div>
    );
};

export default NotFound;