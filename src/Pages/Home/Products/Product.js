import React from 'react';
import '../../Shared/CustomCss.css'
import {AiFillStar} from 'react-icons/ai'

const Product = ({ product }) => {
    const { img, title, price } = product
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-center cusHover">
            <figure><img className='w-72' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex justify-center'>
                    <AiFillStar style={{color : '#FF912C'}}/>
                    <AiFillStar style={{color : '#FF912C'}}/>
                    <AiFillStar style={{color : '#FF912C'}}/>
                    <AiFillStar style={{color : '#FF912C'}}/>
                    <AiFillStar style={{color : '#FF912C'}}/>
                </div>
                <h2 className="text-3xl font-bold">{title}</h2>
                <p>Price : {price}</p>
            </div>
        </div>
    );
};

export default Product;