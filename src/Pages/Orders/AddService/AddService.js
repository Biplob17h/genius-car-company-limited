import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import img1 from '../../../assets/images/checkout/checkout.png'

const AddService = () => {
    
    const service = useLoaderData()
    const { img, price, title, _id, description } = service
    console.log(service)
    return (
        <div>
            <div className='relative'>
                <div className='img-gradient w-full'>
                    <img className=' rounded' style={{ width: '1340px' }} src={img1} alt="" />
                </div>
                <h1 className='absolute  text-6xl font-bold text-white top-1/2 left-24'>Add New Service</h1>
            </div>
            <div className='mt-10 flex'>
                <div className='w-1/2'>
                    <img className='rounded' src={img} alt="" />
                </div>
                <div className='w-1/2 ml-10 mt-5'>
                    <h1 className='text-5xl font-bold'>{title}</h1>
                    <p className='text-2xl my-5'>Price : ${price}</p>
                    <p>{description}</p>
                </div>

            </div>
            <div className='grid grid-cols-2 gap-5'>
                <Link to='/'><button type="submit" className='btn btn-outline custombtn  mt-10 w-full'>Cancel Order</button></Link>
                <Link to={`/checkout/${_id}`}><button type="submit" className='btn btn-outline custombtn  mt-10 w-full'>Confirm Order</button></Link>
            </div>
        </div>
    );
};

export default AddService;