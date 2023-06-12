/*  import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='r'>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="button button-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu mt-1 p-4 w-80 h-full text-base-content">
                        <div className='flex flex-col'>

                        <NavLink
                            to='/dashboard/dashboardhome' className='button mb-2'>Student Home</NavLink>
                             <NavLink
                            to='/dashboard/selectedclass' className='button mb-2'>Selected classes</NavLink>
                        <NavLink
                            className='button mb-2' to='/dashboard/enrolledclass'>Enrolled classes</NavLink>
                        <NavLink
                            className='button mb-2' to='/dashboard/paymenthistory'>payment history</NavLink>  


                          <NavLink
                                to='/dashboard/adminhome' className='button mb-2'>Admin Home</NavLink>

                            <NavLink
                                to='/dashboard/manageclass' className='button mb-2'>Manage classes</NavLink>
                            <NavLink
                                className='button mb-2' to='/dashboard/manageusers'>manage users</NavLink> 
                  

                             <NavLink
                            to='/dashboard/dashboardhome' className='button mb-2'>Instractor Home</NavLink> 
                            <NavLink
                            to='/dashboard/addclass' className='button mb-2'>Add Classes</NavLink>
                        <NavLink
                            className='button mb-2' to='/dashboard/myclasses'>My Classes</NavLink> 
                        </div>
                        <div className='divider'></div>
                        <div className='flex flex-col mb-2'>
                            <NavLink className='button mb-2 ' to='/'>Home</NavLink>
                            <NavLink className='button' to='/classes'>Classes</NavLink>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

 */

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useAdmin from '../../../Hooks/useAdmin';
import useInstractor from '../../../Hooks/useInstractor';
import useStudent from '../../../Hooks/useStudent';

const Dashboard = () => {
    // todo do same thing for instractor
    const { user } = useAuth()
    const [isAdmin] = useAdmin(user.email)
    const [isStudent] = useStudent(user.email)
    const [isInstructor] = useInstractor(user.email)
    return (
        <div className=''>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="button button-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side glass">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu mt-1 p-4 w-80 h-full text-base-content">
                        <div className='flex flex-col'>
                            {/* for student */}
                            {
                                isStudent && <NavLink to='/dashboard/dashboardhome' className='button mb-2'>Student Home</NavLink>
                            }
                            {
                                isStudent && <NavLink to='/dashboard/selectedclass' className='button mb-2'>Selected classes</NavLink>
                            }
                            {
                                isStudent && <NavLink className='button mb-2' to='/dashboard/enrolledclass'>Enrolled classes</NavLink>
                            }
                            {
                                isStudent && <NavLink className='button mb-2' to='/dashboard/paymenthistory'>Payment history</NavLink>
                            }

                            {/* for Instractor */}

                            {
                                isInstructor && <NavLink to='/dashboard/dashboardhome' className='button mb-2'>Instructor Home</NavLink>
                            }
                            {
                                isInstructor && <NavLink to='/dashboard/addclass' className='button mb-2'>Add Class</NavLink>
                            }
                            {
                                isInstructor && <NavLink className='button mb-2' to='/dashboard/myclasses'>My Classes</NavLink>
                            }



                            {/* for admin only  */}
                            {
                                isAdmin && <NavLink to='/dashboard/adminhome' className='button mb-2'>Admin Home</NavLink>
                            }
                            {
                                isAdmin && <NavLink to='/dashboard/manageusers' className='button mb-2'>Manage Users</NavLink>
                            }
                            {
                                isAdmin && <NavLink className='button mb-2' to='/dashboard/manageclass'>Manage Classes</NavLink>
                            }
                        </div>
                        <div className='divider'></div>
                        <div className='flex flex-col mb-2'>
                            <NavLink className='button mb-2' to='/'>Home</NavLink>
                            <NavLink className='button' to='/classes'>Classes</NavLink>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
