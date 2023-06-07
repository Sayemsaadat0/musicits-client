import React from 'react';

const SectionTitle = ({ title1, title2, subtitle }) => {
    return (
        <div className='mx-auto'>
            <h3 className='text-3xl font-bold'>{title1} <span className='text-red-500'>{title2}</span> </h3>
            <p className='mt-3 font-extralight w-[75%] mx-auto'>{subtitle}</p>
        </div>
    );
};

export default SectionTitle;