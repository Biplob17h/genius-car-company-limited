import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import img1 from '../../../assets/images/checkout/checkout.png'
import img2 from '../../../assets/Screenshot 2023-01-31 120814.png'
import Order from './Order';
import { MdDelete } from 'react-icons/md';
import { IoMdReturnLeft } from "react-icons/io";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Orders = () => {
    const { user, logOut } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://genius-car-server-practice-two.vercel.app/orders?email=${user?.email}`,{
            headers : {
                authorisation : `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    return logOut()
                }
                return res.json()})
            .then(data => setOrders(data))
    }, [user?.email, logOut])
    const handleClearCurt = () => {
        const confirm = window.confirm('Are you sure you want to clear cart')
        if (confirm) {
            fetch('https://genius-car-server-practice-two.vercel.app/orders', {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setOrders([])
                    }
                })
        }
        else {
            alert('Clear cart cancel by user')
        }
    }
    const handleSigleDelete = (_id, serviceName) => {
        const confirm = window.confirm(`Are you sure you want delete ${serviceName}`)
        if (confirm) {
            fetch(`https://genius-car-server-practice-two.vercel.app/orders/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        const remaining = orders.filter(odr => odr._id !== _id)
                        setOrders(remaining)
                    }
                })
        }
        else {
            alert('Delete cancel by user')
        }
    }


    if (orders < 1) {
        return <div className='text-center'>
            <img className='mx-auto' src={img2} alt="" />
            <h1 className=' text-5xl font-bold'>You don't have any order</h1>
            <Link to='/'><button className='btn btn-ghost custombtn rounded-md mt-10 '>Go back to Shopping</button></Link>
        </div>
    }
    else {
        return (
            <div>
                <div className='relative'>
                    <div className='img-gradient w-full'>
                        <img className=' rounded' style={{ width: '1340px' }} src={img1} alt="" />
                    </div>
                    <h1 className='absolute  text-6xl font-bold text-white top-1/2 left-24'>Check Out</h1>
                </div>
                <div>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {
                                user?.email ?
                                    <>{
                                        orders.map(order => <Order
                                            key={order._id}
                                            order={order}
                                            handleSigleDelete={handleSigleDelete}
                                        ></Order>)
                                    }</>
                                    : <></>
                            }
                        </table>
                    </div>
                    <div className='mt-10 flex justify-around'>
                        <Link to='/'><button className='btn btn-ghost custombtn rounded-md'><IoMdReturnLeft className='text-xl mx-1' /> Continue Shopping</button></Link>
                        <button onClick={handleClearCurt} className='btn btn-ghost custombtn rounded-md'><MdDelete className='text-xl mx-1' /> Clear Shopping Cart</button>
                    </div>
                </div>
            </div>
        );
    }

};

export default Orders;
