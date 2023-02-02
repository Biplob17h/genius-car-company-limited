import React from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import '../../Shared/CustomCss.css'

const Service = ({ service }) => {
    const {title, _id, price, img } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between'>
                    <h1 className='font-semibold cusorange'>Price : ${price}</h1>
                    <button className='btn btn-ghost text-2xl custombtn cusorange'><BsFillArrowRightSquareFill/></button>
                </div>
            </div>
        </div>
    );
};

export default Service;