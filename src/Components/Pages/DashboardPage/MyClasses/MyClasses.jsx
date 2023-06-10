import React from 'react';
import { Fade } from 'react-reveal';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useMyClass from '../../../../Hooks/useMycClass';
import { GrDocumentUpdate } from 'react-icons/gr';
const MyClasses = () => {
    const [MyClass, refetch] = useMyClass()
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

                                {
                                    MyClass.map((item, index) => (
                                        <tr key={item._id}>
                                            <th>{++index}</th>
                                            <td>
                                                <img className='w-28' style={{borderRadius: '20px 0 20px 0'}} src={item.classImage} alt="" /> <br />
                                                <p className='font-bold'>{item.classTitle}</p></td>

                                            <td>
                                                Price : <span className='text-xl font-semibold text-red-400'>${item.price}</span> <br />
                                                Available Seats : {item.available_seat}
                                            </td>
                                            <td>feedback</td>
                                            <td>
                                                {item.status}
                                            </td>
                                            <td>
                                                <button  className="button" >update</button>
                                            </td>
                                        </tr>
                                    ))

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fade>

        </div>
    );
};

export default MyClasses;