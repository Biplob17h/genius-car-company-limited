import React from 'react';
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa';
import '../../Shared/CustomCss.css'
import { Link } from 'react-router-dom';

const TeamMember = ({teamMember}) => {
    const {name, img } = teamMember;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="text-center text-2xl font-bold">{name}</h2>
            </div>
            <div className='flex justify-around mx-20 pb-4'>
                <Link to={`https://www.facebook.com/`}>< FaFacebook          className='text-3xl cusHover' style={{color : 'rgba(57, 81, 133, 1)'}} /></Link>
                <Link to={`https://twitter.com/`}>< AiFillTwitterCircle  className='text-3xl cusHover' style={{color : 'rgba(85, 172, 238, 1)'}} /></Link>
                <Link to={`https://www.linkedin.com/`}>< AiFillLinkedin      className='text-3xl cusHover' style={{color : 'rgba(10, 102, 194, 1)'}} /></Link>
                <Link to={`https://www.instagram.com/`}>< FaInstagram         className='text-3xl cusHover' /></Link>
            </div>
        </div>
    );
};

export default TeamMember;