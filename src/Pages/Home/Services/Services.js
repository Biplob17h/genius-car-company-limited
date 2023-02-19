import React, { useEffect, useState } from 'react';
import Service from './Service';
import '../../Shared/CustomCss.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://genius-car-server-practice-two.vercel.app/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-32'>
            <div className='text-center'>
                <p className='font-bold mx-auto cusorange'>Service</p>
                <h1 className='my-5 text-5xl font-bold'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
            </div>
            <div className='mt-12 grid grid-cols-3'>
            {
                services.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;