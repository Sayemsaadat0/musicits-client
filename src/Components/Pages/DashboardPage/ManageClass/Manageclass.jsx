import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';

const Manageclass = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4444/manageclass')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);


    const handleApprove = (item) =>{
        const updateItem = {
            id : item._id,
            classTitle : item.classTitle ,
            picture : item.picture,
            name : item.name,           
            email : item.email ,
            available_seat : item.available_seat,
            price: item.price,
            statu: item.status}
            fetch('http://localhost:4444/updatedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(updateItem)
            })
        .then(res => res.json())
        .then(data => {
                alert('sjjss')
                console.log(data);
            });
    }
    // todo handle deny a  click korle 
    const handleDeny = (id) => {
        fetch(`http://localhost:4444/manageclass/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    data.satatus === 'Approved'
                };
            });
    };

    return (
        <div className='w-full h-screen p-4'>
            <Helmet>
                <title>Manage Class</title>
            </Helmet>
            <Fade left>
                <SectionTitle title1={'Manage'} title2={'All Classes'}></SectionTitle>
                <div>
                    <h3 className='text-3xl font-bold underline'>Total Users :</h3>
                    <div className="overflow-x-auto">
                        <table className="table">
                        
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>class image with name</th>
                                    <th>instructor Name & Email</th>
                                    <th>seats & Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr className='table_row' key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img
                                                width={100}
                                                className=''
                                                src={item.picture}
                                                alt=" sss"
                                            />
                                            <br />
                                            <h4 className='font-bold'>{item.classTitle}</h4>
                                        </td>
                                        <td>
                                            <h4 className='font-bold'>{item.name}</h4>
                                            <br />
                                            <p>{item.email}</p>
                                        </td>
                                        <td>
                                            <p>Available Seats: {item.available_seat}</p>
                                            <p>
                                                Price: $<span className='text-red-500'>{item.price}</span>
                                            </p>
                                        </td>
                                        <td>{item.status}</td>
                                        <td>
                                            <button onClick={()=>handleApprove(item)} className='button' >Approve</button>
                                            <br />
                                            <button className='button mt-2' onClick={() => handleDeny(item._id)}>Deny</button>
                                            <br />
                                            <button className='button mt-2'>FeedBack</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Manageclass;
 


