import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Fade } from 'react-reveal';
import { Helmet } from 'react-helmet-async';


const PaymentHistory = () => {
    return (
        <Fade right>
            <Helmet>
                <title>musicits || payment</title>
            </Helmet>

            <div className='h-screen px-5 mt-2 w-full'>
                <SectionTitle title1={'Payment'} title2={'History'}></SectionTitle>
            </div></Fade>
    );
};

export default PaymentHistory;