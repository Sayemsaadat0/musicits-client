import React from 'react';
import './Cover.css'
const Cover = ({text, subtext}) => {
    return (
        <div className='cover h-[400px] flex items-center justify-center'>
            <div className='text-white  text-center'>
                <h2 className='text-3xl font-semibold underline'>{text}</h2>
                <p className='mt-3 font-extralight'>{subtext}</p>
            </div>
        </div>
    );
};

export default Cover;