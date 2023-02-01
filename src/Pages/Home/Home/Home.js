import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mt-14'>
            <Carousel></Carousel>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;