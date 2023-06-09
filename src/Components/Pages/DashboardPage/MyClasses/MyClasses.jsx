import React from 'react';
import { Fade } from 'react-reveal';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';

const MyClasses = () => {
    return (
        <div className='w-full h-screen p-4'>
            <Helmet>
                <title>My Class</title>
            </Helmet>
            <Fade left>
                <SectionTitle title1={'Manage'} title2={'All Classes'}></SectionTitle>
                <div>
                    <h3 className='text-3xl font-bold underline'>Total Users : </h3>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Class image  with name</th>
                                    <th>Seats & Price</th>
                                    <th>FeedBack</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {/* row 1 */}
                                <tr className='table_row'>
                                    <td>#</td>
                                    <td>
                                        <img height={60} width={60} className='rounded-2xl' src="https://i.pinimg.com/236x/b1/71/b6/b171b6b2f119b8d319a78000b26c4a74.jpg" alt="Avatar Tailwind CSS Component" /> 
                                        <h4 className='font-bold'>name name</h4>
                                    </td>
                                    <td>
                                        <p>Available Seats : </p>
                                        <p>Total Admitted : </p>
                                        <p>Price : <span className='text-red-500'>$paysa</span></p>
                                    </td>
                                    <td>
                                        <h4 className='font-bold'>name name</h4> <br />  
                                    </td>
                                    <td>pending / approved / denied</td>
                                    <td>
                                        <button className='button'>Update</button> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fade>

        </div>
    );
};

export default MyClasses;