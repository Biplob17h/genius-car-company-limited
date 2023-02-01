import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header';

const Authentication = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Authentication;