import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { Helmet } from 'react-helmet-async';

const EnrolledClass = () => {
    return (
        <div className='h-screen w-full px-5 mt-3'>
            <Helmet>
                <title>musicits || Enrolled Classes</title>
            </Helmet>

            <SectionTitle title1={'My Enrolled'} title2={'Classes'}></SectionTitle>
            <Fade left>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-5 md:px-5'>
                    {/* <div className="card  bg-base-100 shadow-xl">
                        <figure><img src="https://i.pinimg.com/564x/a2/ca/dd/a2cadd6b028645ea7f8b39380abdea92.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className='card-title'>Class name</h2>
                            <h2>Instractor name</h2>
                            <div className="card-actions ">
                                <Link className='button'>Start tutorials</Link>
                            </div>
                        </div>
                    </div>  */}

                    {/* todo this section is not done */}
                </div>
            </Fade>
        </div>
    );
};

export default EnrolledClass;