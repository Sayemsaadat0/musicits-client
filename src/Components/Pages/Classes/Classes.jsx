import React, { useEffect, useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import LazyLoad from 'react-lazy-load';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Classes = () => {
    const { user } = useAuth();
    const [items, setItems] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch('    https://musicits-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);


    // problem- failed to fetch 
    const handleSelect = (item) => {
        const addedItem = {
            _id: item._id,
            price: item.price,
            available_seat: item.available_seat,
            classTitle: item.classTitle,
            instractor_name: item.instractor_name,
            picture: item.picture,
            email: user.email
        }
        if (user) {
            fetch('    https://musicits-server.vercel.app/selectedclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(addedItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire(
                            'Class selected!'
                        );
                    }
                })
                .catch(error => {
                    console.error('Error selecting class:', error);
                });
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'You have to login first to select a class'
            });
            navigate('/login');
        }
    };
    return (
        <div className=''>
            <Helmet>
                <title>musicits || Classes</title>
            </Helmet>

            <Cover text={'Our Classes'} subtext={'Explore our diverse range of classes: from beginner basics to advanced techniques, theres something for everyone'}></Cover>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-5'>
                {items.map(item => (
                    <div
                        style={{ backgroundColor: item.available_seat === 0 ? 'red' : 'white' }}
                        key={item._id}
                        className="card border shadow-xl">
                        <LazyLoad threshold={0.95}>
                            <figure>
                                <img className='w-full rounded-xl' src={item.picture} alt="car!" />
                            </figure>
                        </LazyLoad>
                        <div className="card-body">
                            <h2 className="card-title">Class Title: {item.classTitle}</h2>
                            <p className='font-semibold'>Instructor Name: {item.instractor_name}</p>
                            <p>Available Seats: {item.available_seat}</p>
                            <p>Price: <span className='text-red-500'>{item.price}</span></p>
                            <div className="card-actions">
                                {
                                    item.disabled || item.available_seat === 0 ?
                                        <button
                                            disabled
                                            className="btn hover:bg-red-500 duration-700 px-6 py-2 hover:text-white">
                                            Select
                                        </button>
                                        :
                                        <button
                                            onClick={() => handleSelect(item)}
                                            className="button">
                                            Select
                                        </button>
                                }

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;




