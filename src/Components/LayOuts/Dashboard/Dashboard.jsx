import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = ({role}) => {
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
                           <Link
                            to='/dashboard/selectedclass' className='button mb-5'>Selected classes</Link>
                        <Link
                            className='button mb-5' to='/dashboard/enrolledclass'>Enrolled classes</Link>
                        <Link
                            className='button' to=''>payment history</Link> 
                            
                           {/* admin */}
                          {/*  {
                            role === 'isAdmin' && <> <Link
                            to='/dashboard/selectedclass' className='button mb-5'>Selected classes</Link>
                        <Link
                            className='button mb-5' to=''>Enrolled classes</Link>
                        <Link
                            className='button' to=''>payment history</Link> </> 
                           } */}
                           {/* instractor */}
                          {/*  {
                           role === 'isInstractor' && <> 
                            <Link
                            to='/dashboard/selectedclass' className='button mb-5'>Selected classes</Link>
                        <Link
                            className='button mb-5' to=''>Enrolled classes</Link>
                        <Link
                            className='button' to=''>payment history</Link> </> 
                           } */}
                         
                        </div>
                        <div className='divider'></div>
                        <div className='flex flex-col mb-5'>
                            <Link className='button mb-5' to='/'>Home</Link>
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