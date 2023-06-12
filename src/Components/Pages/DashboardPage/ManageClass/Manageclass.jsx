import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
// import { useQuery } from '@tanstack/react-query'; 
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const Manageclass = () => {
    const [items, setItems] = useState([]);
 
    useEffect(() => {
        fetch('     https://musicits-server.vercel.app/manageclass')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);  

    /*  const { data: manageclass = [], refetch } = useQuery(['manageclass'], async () => {
        const res = await fetch('     https://musicits-server.vercel.app/manageclass');
        return res.data;
      }); 
 */

    const handleApprove = (item) =>{
        console.log(item);
        const updateItem = {
            id : item._id,
            classTitle : item.classTitle ,
            picture : item.picture,
            instractor_name : item.instractor_name,           
            email : item.email ,
            available_seat : item.available_seat,
            price: item.price,
            status: item.status}
            fetch('     https://musicits-server.vercel.app/updatedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(updateItem)
            })
        .then(res => res.json())
        .then(data => {
            Swal.fire('Class Aprroved')
            console.log(data);
            });
    }
    // todo handle deny a  click korle 
    const handleDeny = (id) => {
        fetch(`     https://musicits-server.vercel.app/manageclass/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    data.satatus === 'denied' 
                    Swal.fire('Class Denied')
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
                                    <tr className='shadow-xl border' key={index}>
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
                                            <h4 className='font-bold'>{item.instractor_name}</h4>
                                            <br />
                                            <p>{item.email}</p>
                                        </td>
                                        <td>
                                            <p>Available Seats: {item.available_seat}</p>
                                            <p>
                                                Price: <span className='text-red-500'>{item.price}</span>
                                            </p>
                                        </td>
                                        <td>{item.status}</td>
                                        <td className='flex flex-col '>
                                            <button onClick={()=>handleApprove(item)} className='button' >Approve</button>
                                            <br />
                                            <button className=' button' onClick={() => handleDeny(item._id)}>Deny</button>
                                            <br />
                                            <Link to='/dashboard/feedback' className='button '>FeedBack</Link>
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
 


