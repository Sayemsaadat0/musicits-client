import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../../Hooks/useAuth';
import Swal from 'sweetalert2'

const AddClass = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [addClassError, setAddClassError] = useState(null);
    const [data, setData] = useState([]);


    const onSubmit = (data) => {
        handleAddClass(data)
    };

    const handleAddClass = (data) => {
        const userData = {
            available_seat:data.available_seat,
            classTitle:data.classTitle,
            email:data.email,
            instractor_name:data.instractor_name,
            picture:data.picture ,
            price:data.price  ,
            status: 'pending'
        };
        console.log(userData.available_seat);
       if (user) {
             fetch('     https://musicits-server.vercel.app/manageclass', {
                 method: 'POST',
                 headers: {
                     'content-type': 'application/json',
                 },
                 body: JSON.stringify(userData)
             })
                 .then(res => res.json())
                 .then(data => {
                     console.log(data);
                     if (data.insertedId) {
                         Swal.fire('Class is pending please wait for Admin Approval');
                     }
                 })
                 .catch(error => {
                     console.error('Error adding class:', error);
                     setAddClassError('An error occurred while adding the class.');
                 });
         } else {
             alert('You have to login first to add a class');
             navigate('/login');
         } 
    };



    return (
        <div className='h-screen mt-10'>
            <Helmet>
                <title>Musicits || Add class</title>
            </Helmet>
            <Fade left>
                <SectionTitle title1={'Add a'} title2={'Class'}></SectionTitle>
                <div>
                    <form
                        className='w-96'
                        onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="label">
                                Class Title
                            </label>
                            <input
                                {...register("classTitle", { required: true })}
                                type="text"
                                placeholder="Enter Your Class Name here"
                                className="input input-bordered input-error w-full"
                            />
                        </div>

                        <div className=" w-full ">
                            <label className="label">
                                Class Cover Image
                            </label>
                            <input
                                {...register("picture", { required: true })}
                                type="text"
                                placeholder="picture"
                                className="input input-bordered input-error w-full "
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="">Name</span>
                            </label>
                            <input
                                {...register("instractor_name", { required: "Name is required" })}
                                type="text"
                                defaultValue={user.displayName}
                                readOnly
                                className="input input-bordered input-error w-full"
                            />
                            {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="">Email</span>
                            </label>
                            <input
                                {...register("email", { required: "Email is required" })}
                                type="text"
                                defaultValue={user?.email}
                                readOnly
                                className="input input-bordered input-error w-full"
                            />
                            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                        </div>

                        <div className="w-full">
                            <label className="label">
                                Available seats
                            </label>
                            <input
                                {...register("available_seat", { required: true })}
                                type="number"
                                placeholder="Available seats"
                                className="input input-bordered input-error w-full"
                            />
                        </div>

                        <div className="w-full">
                            <label className="label">
                                Price
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered input-error w-full"
                            />
                        </div>

                        {addClassError && <p className="text-red-600">{addClassError}</p>}

                        <button
                            className='btn  mt-5 border-red-500 mx-auto'
                            type="submit">
                            Add Class
                        </button>
                    </form>
                </div>
            </Fade>
        </div>
    );
};

export default AddClass;
