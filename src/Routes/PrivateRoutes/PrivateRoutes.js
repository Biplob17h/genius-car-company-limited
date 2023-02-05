import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} =useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <progress className="progress w-full"></progress>
    }
    if(user?.uid){
        return children
    }
    else{
        return <Navigate to='/auth/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoutes;