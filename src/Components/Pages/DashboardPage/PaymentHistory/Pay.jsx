import React from 'react';
import { Helmet } from 'react-helmet-async';
import Fade from 'react-reveal'
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import useSelectedClass from '../../../../Hooks/useSelecClass';





const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Pay = () => {
    const [selectedclass] = useSelectedClass();
    const prices = selectedclass.map(item => item.price);
    console.log(prices);
    
    return (
        <div className=''>
            <Helmet>
                <title>Pay Bils</title>
            </Helmet>

            <Fade top> 
            <SectionTitle title1={'make Your'} title2={'Payments here'}></SectionTitle>
                <Elements stripe={stripePromise}>
                <CheckOutForm prices={prices}></CheckOutForm>
                </Elements>
            </Fade>

        </div>
    );
};

export default Pay;


/* 

    const total = selectedclass.reduce((sum, item) => sum + item.price, 0);
        const price = parseFloat(total.toFixed(2))
*/