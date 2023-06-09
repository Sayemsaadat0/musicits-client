import React from 'react';
import Fade from 'react-reveal'
import AdminNav from './AdminNav';
import AdminChart from './AdminChart';
import AdminTable from './AdminTable';
import { Helmet } from 'react-helmet-async';

const AdminHome = () => {
    return (
        <div className='w-full h-screen'>
            <Helmet>
                <title>Admin Home</title>
            </Helmet>
            <AdminNav></AdminNav>

           <Fade right>
           <div className=' grid grid-cols-3 mt-5 mx-5 '>
                <div className='w-60 h-28 box bg-[#b6e3ce]  flex flex-col justify-center items-center'>
                    <h3 className='text-2xl font-semibold'>total visit : 25</h3>
                    <h3 className='text-2xl font-semibold'>total visit : 25</h3>
                </div>
                <div className='w-60 h-28 box bg-[#ffcb77]  flex flex-col justify-center items-center'>
                    <h3 className='text-2xl font-semibold'>Total Teachers : 25</h3>
                    <h3 className='text-2xl font-semibold'>total Students : 25</h3>
                </div>
                <div className='w-60 h-28 box bg-[#ccabdb] flex flex-col justify-center items-center'>
                    <h3 className='text-2xl font-semibold'> Peinding : 25</h3>
                    <h3 className='text-2xl font-semibold'>Approved : 25</h3>
                </div>
            </div>
           </Fade>

           <div className='w-full flex justify-between gap-10 mt-10'>
            <div className='mx-4'>
                <h3 className='mb-2'>Active Teachers :</h3>
                <AdminTable></AdminTable>
            </div>
            <div className='mr-20'>
               <h3 className='mb-5'>Charts for which class stiudents are more active</h3>
                <AdminChart></AdminChart>
            </div>

           </div>

        </div>
    );
};

export default AdminHome;