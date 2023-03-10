/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/logo.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import '../CustomCss.css'

const Header = () => {
    const { user, logOut} = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://genius-car-server-practice-two.vercel.app/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user?.email, orders])
    const HandleSignOut = () =>{
        logOut()
        .then(()=>(console.log('log out successfull')))
        .catch((error)=>{console.log(error)})
    }
    const getSum = orders =>{
        let sum = 0;
        for (let index = 0; index < orders.length; index++) {
            const element = orders[index];
            const price = element.price
            const priceNum = parseInt(price)
            sum = sum + priceNum;
        }
        return sum
    }
    const total = getSum(orders)
    return (
        <div className="navbar bg-base-100 my-12">
            <div className="flex-1">
                <img src={img} alt="" />
            </div>
            <div className="flex-none">
                <div className='flex justify-center'>
                    <Link to='/'><button className="btn ml-2 btn-ghost custombtn h-4">Home</button></Link>
                    <Link to='/notfound'><button className="btn ml-2 btn-ghost custombtn h-4">Blog</button></Link>
                    <Link to='/notfound'><button className="btn ml-2 btn-ghost custombtn h-4">About</button></Link>
                    <Link to='/notfound'><button className="btn ml-2 btn-ghost custombtn h-4">Appointment</button></Link>
                    {
                        user?.uid
                            ?
                            <div>
                                <div className="dropdown dropdown-end mx-5">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            <span className="badge badge-sm indicator-item">{orders.length}</span>
                                        </div>
                                    </label>
                                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                        <div className="card-body">
                                            <span className="font-bold text-lg">{orders.length} Items</span>
                                            <span className="text-info">Subtotal: ${total}</span>
                                            <div className="card-actions">
                                                <Link to='/order'><button className="btn btn-primary btn-block">View cart</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            {
                                                user?.photoURL 
                                                ? <img src={user?.photoURL} alt="" />
                                                :<img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt='' />
                                            }
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link to='/auth/profile' className="justify-between">
                                                Profile
                                            </Link>
                                        </li>
                                        <li><Link to='/notfound'>Settings</Link></li>
                                        
                                        <li><a onClick={HandleSignOut}>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                            : <div>
                                <Link to='/auth/login'><button className="btn ml-2 btn-ghost custombtn h-4">Login</button></Link>
                            </div>
                    }

                </div>

            </div>
        </div>
    );
};

export default Header;