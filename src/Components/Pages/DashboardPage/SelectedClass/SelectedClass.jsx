import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Fade } from 'react-reveal';
import { Helmet } from 'react-helmet-async';


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
                                <td><Link className='button'>Pay</Link></td>
                                <td><button className='button'>Delete</button></td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                                <td><Link className='button'>Pay</Link></td>
                                <td><button className='button'>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Fade>
        </div>
    );
};

export default SelectedClass;


/* 
 {
      "price": "$1041",
      "picture": "http://placehold.it/32x32",
      "available_seat": 40,
      "class_name": "guiter",
      "instractor_name": "Mendez Rosario"
    }, */