import React from 'react';
import { Fade } from 'react-reveal';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Manageclass = () => {
    return (
       <div className='w-full h-screen p-4'>
        <Fade right>
            <SectionTitle title1={'manage'} title2={'Classes'}></SectionTitle>
        </Fade>
       </div>
    );
};

export default Manageclass;