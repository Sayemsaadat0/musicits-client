import React, { useEffect, useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import LazyLoad from 'react-lazy-load';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


const Classes = () => {
    const { user } = useAuth();
    const [items, setItems] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:4444/classes')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const handleSelect = () => {
        if (user) {
            console.log('Item selected!');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'You Have to Login first to select Ay class'
              })
              navigate('/login')
            }
    };

    return (
        <div>
            <Helmet>
                <title>musicits || Classes</title>
            </Helmet>

            <Cover text={'Our Classes'} subtext={'Explore our diverse range of classes: from beginner basics to advanced techniques, theres something for everyone'}></Cover>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-5'>

                {items.map(item => (
                    <div
                        style={{ backgroundColor: item.available_seat === 0 ? 'red' : 'white' }}
                        key={item.price}
                        className="card glass"
                    >
                        <LazyLoad threshold={0.95}>
                            <figure>
                                <img src={item.picture} alt="car!" />
                            </figure>
                        </LazyLoad>
                        <div className="card-body">
                            <h2 className="card-title">{item.class_name}</h2>
                            <p className='font-semibold'>{item.instructor_name}</p>
                            <p>Available Seats: {item.available_seat}</p>
                            <p>Price: <span className='text-red-500'>{item.price}</span></p>
                            <div className="card-actions">
                                <button
                                    disabled={item.available_seat === 0}
                                    onClick={handleSelect}
                                    className="btn hover:bg-red-500 duration-700 px-6 py-2 hover:text-white"
                                >
                                    Select
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;
