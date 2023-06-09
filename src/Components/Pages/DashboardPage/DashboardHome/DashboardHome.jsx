import React from 'react';
import { Helmet } from 'react-helmet-async';
import LazyLoad from 'react-lazy-load';

const DashboardHome = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <Helmet>
                <title>Dasboard</title>
            </Helmet>
            <p>Hey Mr.</p>
            <LazyLoad threshold={0.95}>
            <img src="https://i.ibb.co/YZ4mmq0/musicits.gif" alt="" />
            </LazyLoad>
        </div>
    );
};

export default DashboardHome;