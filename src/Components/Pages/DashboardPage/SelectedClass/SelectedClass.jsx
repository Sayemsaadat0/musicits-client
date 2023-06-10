import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Fade } from 'react-reveal';
import { Helmet } from 'react-helmet-async';
import { BsTrash } from 'react-icons/bs'
import Swal from 'sweetalert2';
import useSelectedClass from '../../../../Hooks/useSelecClass';

// import useAuth from '../../../../Hooks/useAuth';


const SelectedClass = () => {

/*     const [items, setItems] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:4444/selectedclass/${items.email}`)
        .then(res=>res.json())
        .then(data=> {
            setItems(data);
        })
    },[]) */

    const [selectedclass, refetch] = useSelectedClass()

    const handleDelete = (item) =>{
        console.log('clicked')
        fetch(`http://localhost:4444/selectedclass/${item._id}`,{
            method : 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                Swal.fire(
                    'success',
                    'deleted succesfully' 
                )
            }
            refetch()
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
                                <th>{++ index}</th>
                                <td>{item.class_name}</td>
                                <td>{item.instractor_name}</td>
                                <td>{item.price} <br /> 
                                Available Seats : {item.available_seat}
                                 </td>
                                <td><Link to='/dashboard/pay' className='button'>Pay</Link></td>
                                <td><button onClick={()=>handleDelete(item)} className="delete"><BsTrash></BsTrash> </button></td>
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


