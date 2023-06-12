import React, { useEffect, useState } from 'react';
import './style.css'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Slide from 'react-reveal/Slide'
import LazyLoad from 'react-lazy-load';

const PopularInstractor = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('    https://musicits-server.vercel.app/popularinstractor')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, []);
    return (
        <div>

            <SectionTitle title1={'Meet Our Popular Instructors:'} title2={'Learn from the Best'} subtitle={'Get ready to learn from the crème de la crème of music instruction with our popular instructors. These highly skilled  musicians bring their wealth of expertise and passion to our platform, offering you the opportunity to receive top-notch instruction from the best in the business. '}></SectionTitle>
            <Slide right>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mx-10'>
                    {
                        teachers.map((t) => <div key={t.name} style={{ borderRadius: '100px 0 100px 0' }} 
                        className="card image bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-xl font-semibold">{t.name}</h2>
                            </div>
                          <LazyLoad threshold={0.95}>
                          <img style={{ borderRadius: '100px 0 100px 0' }} className="hover:scale-110 duration-500 " src={t.picture} />
                          </LazyLoad>
                        </div> )
                    }


                </div>
            </Slide>

        </div>
    );
};

export default PopularInstractor;







