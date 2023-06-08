import React from 'react';
import banner from '../../../../assets/home/banner.png'
import Fade from 'react-reveal/Fade';
const Banner = () => {
    return (
        <div>
             <Fade bottom>
             < img className="w-auto object-cover" src={banner} alt="" />
             </Fade>
        </div>
    );
};

export default Banner;