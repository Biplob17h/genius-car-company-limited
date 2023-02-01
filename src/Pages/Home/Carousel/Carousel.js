import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import Slide from './Slide';

const Carousel = () => {
    const carouselData = [
        {
            id:"1",
            next:"2",
            pre:"6",
            img:img1
        },
        {
            id:"2",
            next:"3",
            pre:"1",
            img:img2
        },
        {
            id:"3",
            next:"4",
            pre:"2",
            img:img3
        },
        {
            id:"4",
            next:"5",
            pre:"3",
            img:img4
        },
        {
            id:"5",
            next:"6",
            pre:"4",
            img:img5
        },
        {
            id:"6",
            next:"1",
            pre:"5",
            img:img6
        },
    ]
    return (
        <div className="carousel  w-full">
            {
                carouselData.map(slide => <Slide
                key={slide.id}
                slide={slide}
                ></Slide>)
            }
        </div>
    );
};

export default Carousel;