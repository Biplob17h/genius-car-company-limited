import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products)

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='text-center'>
            <p className='font-bold cusorange'>Popular Products</p>
            <h1 className="text-5xl font-bold my-5">Browse Our Products</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            <div className='my-32 grid grid-cols-3 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;