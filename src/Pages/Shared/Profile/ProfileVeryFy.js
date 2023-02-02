import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const ProfileVeryFy = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user?.uid){
        return children;
    }
    else{
        <Navigate to='/'></Navigate>
    }
};

export default ProfileVeryFy;