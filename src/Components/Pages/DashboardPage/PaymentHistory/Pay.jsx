import React from 'react';
import { Helmet } from 'react-helmet-async';
import Fade from 'react-reveal'
const Pay = () => {
    return (
        <div className='h-screen p-4'>
             <Helmet>
                <title>Pay Bils</title>
            </Helmet>
            <Fade top>
                pay
            </Fade>
        </div>
    );
};

export default Pay;