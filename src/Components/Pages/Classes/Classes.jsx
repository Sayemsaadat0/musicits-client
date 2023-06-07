import React, { useEffect, useState } from 'react';
import Cover from '../Shared/Cover/Cover';

const Classes = () => {
  /*   const { classes, setClasses } = useState()
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []) */
    return (
        <div>
            <Cover text={'Our Classes'} subtext={'Explore our diverse range of classes: from beginner basics to advanced techniques, theres something for everyone'}></Cover>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-5'>

               
                    <div  className="card  glass">
                        <figure><img src="https://i.pinimg.com/564x/38/60/ba/3860babe0e3860a6ca171700a1f07eb3.jpg" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">classs.name</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions ">
                                <button className="button">Learn now!</button>
                            </div>
                        </div>
                    </div>
              
            </div>
        </div>
    );
};

export default Classes;