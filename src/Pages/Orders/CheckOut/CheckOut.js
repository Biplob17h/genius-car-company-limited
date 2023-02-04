import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import img from '../../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

export const ordersContext = createContext()
const CheckOut = () => {
    const [orders, setOrders] = useState([])
   
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    
    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    const navigate = useNavigate()
    const handleChackOutSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'email not found';
        const first = form.first.value;
        const secend = form.last.value;
        const phone = form.phone.value;
        const name = `${first} ${secend}`
        const masseage = form.masseage.value;
        const order = {
            email,
            phone,
            masseage,
            customar : name,
            price : service.price,
            serviceName : service.title,
            serviceId  : service._id
        }
        console.log(order)
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                form.reset()
                alert('Your order has been placed Successfully')
                navigate('/order')
            }
        })
    }
    
    return (
        <div>
            <div className='relative'>
                <div className='img-gradient w-full'>
                    <img className=' rounded' style={{ width: '1340px' }} src={img} alt="" />
                </div>
                <h1 className='absolute  text-6xl font-bold text-white top-1/2 left-24'>Check Out</h1>
            </div>
            <form onSubmit={handleChackOutSubmit} className=' p-24 bg-slate-200 rounded-md'>
                <div>
                    <div className='grid grid-cols-2 w-full gap-5'>
                        <input type="text" name='first' placeholder="First name" className="input w-full " />
                        <input type="text" name='last' placeholder="Last name" className="input w-full " />
                        <input type="number" name='phone' defaultValue={`+880`} placeholder="Phone Number" className="input w-full " />
                        <input type="email" name='email' defaultValue={user?.email} className="input w-full " readOnly/>
                    </div>
                    <div className='mt-10'>
                        <textarea className="textarea w-full h-52" name='masseage' placeholder="Your Masseage"></textarea>
                    </div>
                    <div>
                        <button type="submit" className='btn btn-outline custombtn w-full mt-10'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};


export default CheckOut ;