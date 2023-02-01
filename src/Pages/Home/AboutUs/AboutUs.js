import React from 'react';
import parson from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
import '../../Shared/CustomCss.css'

const AboutUs = () => {
    return (
        <div className='my-36 flex  relative'>
            <div className='w-1/2 '>
                <img src={parson} alt="" />
                <img className='absolute w-96 h-72 top-60 rounded left-56' src={parts} alt="" />
            </div>
            <div className='w-1/2 ml-16'>
                <p className='font-bold mb-5' style={{color : '#FF3811'}}>About us</p>
                <h1 className='text-5xl font-bold'>We are qualified <br /> & of experience <br /> in this field</h1>
                <p className='mt-7'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='mt-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btn btn-ghost btn-outline custombtn mt-7'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;