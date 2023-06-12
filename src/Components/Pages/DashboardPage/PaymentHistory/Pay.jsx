import React from 'react';
import { Helmet } from 'react-helmet-async';
import Fade from 'react-reveal'
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import useSelectedClass from '../../../../Hooks/useSelecClass';
import { useLoaderData } from 'react-router-dom';

// http://localhost:4444/
// https://musicits-server.vercel.app/

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Pay = () => {
    const payData = useLoaderData() 

    return (
        <div className=''>
            <Helmet>
                <title>Pay Bils</title>
            </Helmet>

            <Fade top>
                <SectionTitle title1={'make Your'} title2={'Payments here'}></SectionTitle>
                <Elements stripe={stripePromise}>
                    <CheckOutForm payData={payData}></CheckOutForm>
                </Elements>
            </Fade>

        </div>
    );
};

export default Pay;

