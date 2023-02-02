import React from 'react';
import check from '../../../assets/icons/check.svg'
import deliveryt from '../../../assets/icons/deliveryt.svg'
import Wrench from '../../../assets/icons/Wrench.svg'
import Group from '../../../assets/icons/Group 38729.svg'
import group from '../../../assets/icons/group.svg'
import parson from '../../../assets/icons/person.svg'

const Features = () => {
    return (
        <div className='text-center'>
            <p className='font-bold mx-auto cusorange'>Core Features</p>
            <h1 className='my-5 text-5xl font-bold'>Why Choose Us</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
            <div className='mt-12 grid grid-cols-6 justify-center gap-7'>
                <div className='custombtn rounded-md py-5'>
                    <img className='mx-auto' src={group} alt="" />
                    <p className='font-bold mt-5'>Expert Team</p>
                </div>
                <div className='custombtn rounded-md py-5'>
                    <img style={{backgroundColor:'lightgray'}} className='mx-auto' src={Group} alt="" />
                    <p className='font-bold mt-5'>Timely Delivery</p>
                </div>
                <div className='custombtn rounded-md py-5'>
                    <img className='mx-auto' src={parson} alt="" />
                    <p className='font-bold mt-5'>24/7 Support</p>
                </div>
                <div className='custombtn rounded-md py-5'>
                    <img className='mx-auto' src={Wrench} alt="" />
                    <p className='font-bold mt-5'>Best Equipment</p>
                </div>
                <div className='custombtn rounded-md py-5'>
                    <img className='mx-auto' src={check} alt="" />
                    <p className='font-bold mt-5'>100% Guranty</p>
                </div>
                <div className='custombtn rounded-md py-5'>
                    <img className='mx-auto' src={deliveryt} alt="" />
                    <p className='font-bold mt-5'>Timely Delivery</p>
                </div>
                
            </div>
        </div>
    );
};

export default Features;