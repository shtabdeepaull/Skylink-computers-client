import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import FixProducts from './FixProducts';
import Reviews from './Reviews';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
            <FixProducts></FixProducts>
            <Footer></Footer>
        </div>
    );
};

export default Home;