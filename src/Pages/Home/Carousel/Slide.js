import React from 'react';
import '../../Shared/CustomCss.css'

const Slide = ({ slide }) => {
    const { id, next, pre, img } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative  w-full">
            <div className='img-gradient'>
                <img src={img} alt="" className="w-full " />
            </div>
            <div className='absolute font-bold  text-white text-7xl left-40 top-48'>
                <h1>Affordable <br /> Price For Car <br /> Servicing</h1>
            </div>
            <div className='absolute   text-white  left-40 ' style={{ marginTop: '490px' }}>
                <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            </div>
            <div className='absolute left-40' style={{ marginTop: '650px' }} >
                <button className="btn btn-ghost text-white custombtn mr-4">Discover More</button>
                <button className="btn btn-ghost text-white custombtn">Latest Project</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 right-5  bottom-40">
                <a href={`#slide${pre}`} className="btn btn-circle mr-10">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default Slide;