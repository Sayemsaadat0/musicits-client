import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import useAxios from '../../../../Hooks/useAxios'
import { useEffect } from 'react';
import useAuth from '../../../../Hooks/useAuth';


const CheckOutForm = ({payData}) => {
    const {user} = useAuth()
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transitionId, setTransitionId] = useState('')
    const [axiosSecure] = useAxios()
    const [clientSecret, setClientSecret] = useState('')
    


    useEffect(()=>{
        console.log(payData?.price);
        if(payData?.price > 0){
            axiosSecure.post('/create-payment-intent', {price: payData?.price})
            .then(res=>{
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
        }
    },[payData?.price])
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if(error){
            console.log('error', error)
            setCardError(error.message)
        }
        else{
            console.log('paument method', paymentMethod)
            setCardError('')
        }
        setSuccess('')
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'annonymos',
                  name : user?.displayname || 'unknown'
                },
              },
            },
          );
          if(confirmError){
            console.log(confirmError);
          }
          if(paymentIntent.status === "succeeded"){
            setSuccess('congrats ! your payment completed')
            setTransitionId(paymentIntent.id)
          }
console.log(card);
    }
    return (
        <div >
            <form  onSubmit={handleSubmit}>
                <CardElement className='input input-error p-4'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-outline btn-block mt-3 btn-error' type="submit" disabled={!stripe || !elements}>
                    Pay
                </button>
            </form>
            {
                success && <p>{success}</p>
            }
            <p>Your Transition id : <span className='text-green-500'>{transitionId}</span></p>
        </div>
    );
};

export default CheckOutForm;