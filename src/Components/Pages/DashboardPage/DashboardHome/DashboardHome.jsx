import React from 'react';
import { Helmet } from 'react-helmet-async';
import LazyLoad from 'react-lazy-load';
import useAuth from '../../../../Hooks/useAuth';

const DashboardHome = () => { 
    const {user} = useAuth() 
    console.log(user)
    return (
        <div className='w-full flex flex-col items-center'>
            <Helmet>
                <title>Dasboard</title>
            </Helmet>
            <p className=' font-bold mb-10'>Hey Mr. <span className='text-red-500 text-3xl'>{user.displayName}</span></p>
            <LazyLoad threshold={0.95}>
            <img src="https://i.ibb.co/YZ4mmq0/musicits.gif" alt="" />
            </LazyLoad>
        </div>
    );
};

export default DashboardHome;