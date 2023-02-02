import React from 'react';
import phone from '../../../assets/contracts/5068731.png'
import calender from '../../../assets/contracts/55281.png'
import location from '../../../assets/contracts/597-5975318_png-file-svg-location-icon-png-transparent-png.png'


const Contacts = () => {
    return (
        <div className='grid grid-cols-3 my-32 gap-10 text-white bg-black p-20 rounded'>
            <div className='flex justify-center'>
                <div>
                    <img className='w-16 bg-white p-3 rounded' src={calender} alt="" />
                </div>
                <div className='ml-5'>
                    <p>We are open monday-friday</p>
                    <h1 className='text-3xl font-bold'>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='flex justify-center'>
                <div>
                    <img className='w-16 bg-white p-3 rounded' src={phone} alt="" />
                </div>
                <div className='ml-5'>
                    <p>Have a question?</p>
                    <h1 className='text-3xl font-bold'>+2546 251 2658</h1>
                </div>
            </div>
            <div className='flex justify-center'>
                <div>
                    <img className='w-16 bg-white p-3 rounded' src={location} alt="" />
                </div>
                <div className='ml-5'>
                    <p>Need a repair? our address</p>
                    <h1 className='text-3xl font-bold'>Liza Street, New York</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Contacts;