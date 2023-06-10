import React from 'react';
import { Fade } from 'react-reveal';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../../Hooks/useAuth';

const AddClass = () => {
    const {user} = useAuth()
    const { register, handleSubmit,  formState: { errors } } = useForm();
   
    const onSubmit = data => {
       
        console.log(data)
    };


    console.log(errors);
    return (
        <div className='h-screen mt-10' >
            <Helmet>
                <title>Musicits || Add class</title>
            </Helmet>
            <Fade left>

                <SectionTitle title1={'Add a'} title2={'Class'}></SectionTitle>
                <div >


                    <form className='w-96'
                    onSubmit={handleSubmit(onSubmit)}>
                     <div>
                            <label className="label">
                            Class Title</label>
                            <input 
                            {...register("classTitle", { required: true })}
                            type="text" 
                            name='classTitle'
                            placeholder="Enter Your Class Name here" 
                            className="input input-bordered input-error w-full" 
                         />
                        </div>

                        <div className=" w-full ">
                            <label className="label">
                            Class Cover Image</label>
                            <input 
                            {...register("classImage", { required: true })}
                            type="text" 
                            placeholder="classImage"
                            name='classImage' 
                            className="input input-bordered input-error w-full " 
                         />
                        </div>

                        <div className=" w-full ">
                            <label className="label">
                      Instractor Name</label>
                            <input 
                            {...register("name")}
                            type="text" 
                            placeholder={user.displayName}
                            name='name'
                            className="input input-bordered input-error w-full " 
                            disabled/>
                        </div>

                        <div className=" w-full ">
                            <label className="label">
                      Instractor Email</label>
                            <input
                             {...register("email")}
                             type="email"
                            name='email'
                             placeholder={user.email}
                             className="input input-bordered input-error w-full " 
                            disabled/>
                        </div>

                      

                        <div className=" w-full ">
                            <label className="label">
                            Available seats</label>
                            <input
                             {...register("availableSeats", { required: true })} type="number" name='availableSeats' placeholder="Available seats" className="input input-bordered input-error w-full " />
                        </div>

                        <div className=" w-full ">
                            <label className="label">
                            Price</label>
                            <input
                             {...register("price", { required: true })} type="number" 
                            name='price'
                            placeholder="Price" className="input input-bordered input-error w-full " />
                        </div>
                  

                        

                        <input className='btn w-1/4  mt-5 border-red-500 mx-auto' type="submit" value='Add class' />
                    </form>
                </div>

            </Fade>

        </div>
    );
};

export default AddClass;