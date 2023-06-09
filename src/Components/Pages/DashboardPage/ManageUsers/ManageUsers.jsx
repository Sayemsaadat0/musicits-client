import React from 'react';
import { Fade } from 'react-reveal';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';

const ManageUsers = () => {
    return (
        <div className='w-full h-screen p-4'>
             <Helmet>
                <title>Manage Users</title>
            </Helmet>
        <Fade left>
            <SectionTitle title1={'Manage'} title2={'All Users'}></SectionTitle>
            <div>
                <h3 className='text-3xl font-bold underline'>Total Users : </h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>image</th>
                                <th>Name & Job</th>
                                <th>email</th>
                                <th>role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className='table_row'>
                                <td>#</td>
                                <td>
                                    <img height={60} width={60} className='rounded-full' src="https://i.pinimg.com/236x/b1/71/b6/b171b6b2f119b8d319a78000b26c4a74.jpg" alt="Avatar Tailwind CSS Component" />
                                </td>
                                <td>
                                    <h4 className='font-bold'>name name</h4> <br />
                                    <p>job which teacher</p>
                                </td>
                                <td>email@email.com</td>
                                <td>Studnet</td>
                                <td>
                                    <button className='button'>Make Admin</button> <br />
                                    <button className='button mt-2'>Make Instractor</button>
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

export default ManageUsers;