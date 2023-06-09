import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = ({ role }) => {
    return (
        <div className=''>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side glass">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu mt-1 p-4 w-80 h-full text-base-content">
                        <div className='flex flex-col'>
                            {/* studet */}

                          {/*  <Link
                            to='/dashboard/dashboardhome' className='button mb-5'>Student Home</Link>
                             <Link
                            to='/dashboard/selectedclass' className='button mb-5'>Selected classes</Link>
                        <Link
                            className='button mb-5' to='/dashboard/enrolledclass'>Enrolled classes</Link>
                        <Link
                            className='button' to='/dashboard/paymenthistory'>payment history</Link>   */}




                            {/* admin */}
                            {/*  {
                            role === 'isAdmin' && <></> 
                           } todo manage class*/}
                          
                       
                            <Link
                                to='/dashboard/adminhome' className='button mb-5'>Admin Home</Link>

                            <Link
                                to='/dashboard/manageclass' className='button mb-5'>Manage classes</Link>
                            <Link
                                className='button mb-5' to='/dashboard/manageusers'>manage users</Link> 
                  





                            {/* instractor */}
                            {/*  {
                           role === 'isInstractor' && <> 
                           </>  } {/* todo my class implement */}
                           
                  {/*            <Link
                            to='/dashboard/dashboardhome' className='button mb-5'>Instractor Home</Link> 
                            <Link
                            to='/dashboard/addclass' className='button mb-5'>Add Classes</Link>
                        <Link
                            className='button mb-5' to=''>My Classes</Link> */}
                        </div>
                        <div className='divider'></div>
                        <div className='flex flex-col mb-5'>
                            <Link className='button mb-5 flex ' to='/'>Home</Link>
                            <Link className='button' to='/classes'>Classes</Link>
                        </div>

                    </ul>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;




/* 
*/