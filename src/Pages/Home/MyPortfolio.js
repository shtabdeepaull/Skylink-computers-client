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
                    <h1 className="text-5xl text-secondary font-bold">Biography</h1>
                    <p className="py-6">Hi, I’m Shtabdee Paul, I have a diploma in CS from Moulvibazar Polytechnic Institute and I'm currently learning full-stack Web development under Programming-Hero team.

                        Previously, I worked at several projects in our inter-institutional programming championship where I made several programms to build small house automation tools and also building a e-commerce site for our internship project. Aside from work, I have developed several project from my own and those are listed on Github. <br />
                        Although I'm a fresher in this field but I'm very much enthusiastic and determined towards my career and I believe that it will help me to achieve my goal.</p>
                   <p className='text-2xl text-secondary font-bold'>Projects</p>
                   <p><a href="https://shtabdeepaull.github.io/secound-assignment/">Project-1</a></p>
                   <p><a href="https://shtabdeepaull.github.io/developer-portfolio/">Project-2</a></p>
                   <p><a href="edulab-visa-consultancy-center.web.app">Project-3</a></p>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;