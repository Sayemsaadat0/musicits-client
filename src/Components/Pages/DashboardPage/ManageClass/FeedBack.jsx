import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const FeedBack = () => {
    return (
        <div className='w-full '>
            <Helmet>
                <title>Dashboard || Feedback</title>
            </Helmet>
           <div className='mx-20'>
           <SectionTitle title1={'Feed'}title2={'back'}></SectionTitle>
            <div className="form-control mx-20">
                <label className="label">
                    <span className="label-text">Send FeedBack</span>
                </label>
                    <textarea className="textarea w-1/2 border-black" placeholder="Bio"></textarea> 
                    <button className='btn w-1/4 mt-2 hover:btn-ghost'>Send</button>
            </div>
           </div>
        </div>
    );
};

export default FeedBack;