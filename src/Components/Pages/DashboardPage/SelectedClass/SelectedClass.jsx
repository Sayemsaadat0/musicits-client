import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Fade } from 'react-reveal';
import { Helmet } from 'react-helmet-async';
import { BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2';
import useSelectedClass from '../../../../Hooks/useSelecClass';

const SelectedClass = () => {



    const [selectedclass, refetch] = useSelectedClass()

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4444/selectedclass/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }



    return (
        <div className='w-full p-5 h-screen  '>
            <Helmet>
                <title>musicits || Selected Class</title>
            </Helmet>

            <SectionTitle title1={'My Selected'} title2={'Classes'}></SectionTitle>

            <Fade left>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Instractor Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedclass.map((item, index) => <tr key={item._id}>
                                    <th>{++index}</th>
                                    <td>{item.classtitle}</td>
                                    <td>{item.instractor_name}</td>
                                    <td>Price : <span className='text-xl font-semibold text-red-400'>{item.price}</span> <br />
                                        Available Seats : {item.available_seat}
                                    </td>
                                    <td><Link to='/dashboard/pay' className='button'>Pay</Link></td>
                                    <td><button onClick={() => handleDelete(item)} className="delete"><BsTrash></BsTrash> </button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </Fade>
        </div>
    );
};

export default SelectedClass;








/*     const [items, setItems] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:4444/selectedclass/${items.email}`)
        .then(res=>res.json())
        .then(data=> {
            setItems(data);
        })
    },[]) */