import React from 'react';
import './Cover.css'
import { Slide , Fade } from 'react-reveal';

const Cover = ({ text, subtext }) => {
    return (
        <Slide top>
            <div className='cover h-[400px] flex items-center justify-center'>
                <div className='text-white  text-center'>
                    <Fade left>
                    <h2 className='text-3xl font-semibold underline'>{text}</h2>
                    </Fade>
                    <Fade right>
                    <p className='mt-3 font-extralight'>{subtext}</p>
                    </Fade>
                </div>
            </div>
        </Slide>
    );
};

export default Cover;