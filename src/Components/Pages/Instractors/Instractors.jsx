import React, { useEffect, useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import { Fade } from 'react-reveal';
import { Helmet } from 'react-helmet-async';
import LazyLoad from 'react-lazy-load';

const Instractors = () => {
    const [items, setitems] = useState([]);

useEffect(() => {
    fetch('instractor.json')
        .then(res => res.json())
        .then(data => setitems(data))
}, []);
    return (
        <div>
            <Helmet>
                <title>musicits || Instractors</title>
            </Helmet>

            <Cover text={'Our Instractros'} subtext={'Meet our inspiring instructors: skilled, passionate, andreadytoguideyou on your musical journey'}></Cover>
            <Fade top>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-5 md:px-5 '>
                  {
                    items.map(item =>  <div key={item.name} className="card lg:card-side bg-base-100 shadow-xl">
                 <LazyLoad threshold={0.95}>
                 <figure><img className='hover:scale-110 duration-500 h-48 w-full ' src={item.picture} alt="Album" /></figure>
                 </LazyLoad>
                    <div className="card-body">
                        <h2 className="font-semibold">{item.name}</h2>
                        <p>{item.email}</p>
                        <div className="card-actions">
                            <button className="button">See Classes</button>
                        </div>
                    </div>
                </div>)
                  }
                </div>
            </Fade>
        </div>
    );
};

export default Instractors;





