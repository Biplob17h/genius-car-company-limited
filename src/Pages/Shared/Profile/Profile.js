/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {
                user?.photoURL 
                ?<><img className='mx-auto w-96 rounded-full' src={user?.photoURL} alt="This photo is brocken" /></>
                :<><img className='mx-auto w-96 rounded-full' src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt='' /></>
            }
            {
                user?.displayName 
                ?<><h1 className='text-5xl font-bold text-center mt-10'>{user?.displayName}</h1></>
                :<><h1 className='text-5xl font-bold text-center mt-10'>User name Not Set</h1></>
            }
            <h1 className='text-3xl font-bold text-center mt-10'>{user?.email}</h1>
        </div>
    );
};

export default Profile;