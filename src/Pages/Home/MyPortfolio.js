import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/profile.png';

const MyPortfolio = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-96 text-center'>
                    <div className="avatar">
                        <div className="  w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={profile} alt="" />
                        </div>
                    </div>
                    <h2 className='text-2xl text-secondary'>Shtabdee Paul</h2>
                    <p>Email:shtabdee30@gmail.com</p>
                    <p>Web Developer</p>
                    <div className='flex justify-center items-center m-4'>
                    <p> <a href="https://www.linkedin.com/in/shtabdee-paul-1a2604195/"><i className="fa-brands m-2 fa-2x fa-linkedin"></i></a> </p>
                    <p><a href="https://github.com/shtabdeepaull"><i className="fa-brands m-2 fa-2x fa-github"></i></a></p>
                    <p><i className="fa-solid m-2 fa-2x fa-envelope"></i></p>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;