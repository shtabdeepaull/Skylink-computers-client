import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" mt-8 p-10 bg-base-200 ">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/blogs" className="link link-hover">Blogs</Link>
                    <Link to="/dashboard" className="link link-hover">Dashboard</Link>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/myportfolio" className="link link-hover">My Portfolio</Link>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href="https://www.linkedin.com/in/shtabdee-paul-1a2604195/"  className="link link-hover"><i className="fa-brands text-secondary fa-2x fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/shtabdee/" className="link link-hover"><i class="fa-brands text-secondary fa-2x fa-instagram-square"></i></a>
                    <a href="https://www.facebook.com/shtabdee.paul/" className="link link-hover"><i class="fa-brands text-secondary fa-2x fa-facebook-square"></i></a>
                </div>
            </div>
            <div className='text-center m-4'>
                <p>Copyright © 2022 - All right reserved by SkyLink Computers</p>
            </div>
        </footer>
    );
};

export default Footer;