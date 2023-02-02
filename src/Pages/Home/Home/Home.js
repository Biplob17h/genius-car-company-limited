import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Carousel from '../Carousel/Carousel';
import Contacts from '../Contacts/Contacts';
import Features from '../Features/Features';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div className='mt-14'>
            <Carousel></Carousel>
            <AboutUs></AboutUs>
            <Services></Services>
            <Contacts></Contacts>
            <Products></Products>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;