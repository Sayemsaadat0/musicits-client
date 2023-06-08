import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Fade } from 'react-reveal';
import { Helmet } from 'react-helmet-async';
import { BsTrash } from 'react-icons/bs'


const SelectedClass = () => {
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
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td><Link to='/dashboard/pay' className='button'>Pay</Link></td>
                                <td><button className="delete"><BsTrash></BsTrash> </button></td>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td><Link to='/dashboard/pay' className='button'>Pay</Link></td>
                                <td><button className="delete"><BsTrash></BsTrash> </button></td>
                            </tr>
                         
                        </tbody>
                    </table>
                </div>
            </Fade>
        </div>
    );
};

export default SelectedClass;


