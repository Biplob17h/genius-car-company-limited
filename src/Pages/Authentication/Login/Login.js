import React, { useContext, useState } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const {signIn, googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleSubmitLogin = event => {
        setError('')
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
        .then((result) =>{
            const user = result.user;
            console.log('user log in successfully', user)
            navigate(from, {replace : true})
        })
        .catch((error)=>{
            const errorCode = error.code;
            console.log(errorCode)
            setError(errorCode)
        })
    }
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then((result)=>{
            const user = result.user;
            navigate(from, {replace : true})
            console.log(user)
        })
        .catch((error)=>{
            const errorCode = error.code;
            setError(errorCode)
        })
    }
    return (
        <div className='flex'>
            <div className='w-1/2 mt-5'>
                <img src={img} alt="" />
            </div>
            <div className=" min-h-screen bg-base-200 w-2/5 -mt-6  m-4 rounded-md mr-10">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 ">
                        <h1 className="text-5xl font-semibold text-center mt-16" style={{ color: 'rgba(68, 68, 68, 1)' }}>Login</h1>
                        <form onSubmit={handleSubmitLogin} className="card-body pl-16">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <p className='text-red-600 font-semibold'>{error}</p>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-ghost cusBgOrange text-white custombtn">Login</button>
                            </div>
                        </form>
                        <div className='text-center mb-5'>
                            <p className='mb-5'>Or Login With</p>
                            <div className=' flex justify-center'>
                            < FaFacebook className='text-5xl p-3 cusHover rounded-full' style={{color : 'rgba(57, 81, 133, 1)'}} />
                            < AiFillLinkedin className='text-5xl p-3 cusHover rounded-full' style={{color : 'rgba(10, 102, 194, 1)'}} />
                            < FcGoogle onClick={handleGoogleSignIn} className='text-5xl p-3 cusHover rounded-full' />
                            </div>
                        </div>
                        <div className='text-center pb-10'>
                            <p>Don't have an account? <Link to='/auth/register' className='font-semibold cusorange '>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;