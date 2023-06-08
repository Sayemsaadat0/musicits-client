import React from 'react';
import { Fade } from 'react-reveal';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const AddClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className='h-screen mt-10' >
            <Fade left>

                <SectionTitle title1={'Add a'} title2={'Class'}></SectionTitle>
                <div className=' '>
                    <form className='w-96'
                    onSubmit={handleSubmit(onSubmit)}>
                     <div className='mx-auto'>
                     <div className="">
                            <label className="label">
                            Class name</label>
                           
                            <input type="text" placeholder="Enter Your Class Name here" className="input input-bordered input-error w-full" 
                            {...register("ClassName", { required: true })}/>
                        </div>

                        <div className=" w-full ">
                            <label className="label">
                            Class Cover Image</label>
                            <input type="text" placeholder="Iamge URL " className="input input-bordered input-error w-full " 
                            {...register("classImage", { required: true })}/>
                        </div>

                        <div className=" w-full ">
                            <label className="label">
                      Instractor Name</label>
                            <input type="text" placeholder="name " className="input input-bordered input-error w-full " 
                            {...register("name", { required: true })} disabled/>
                        </div>

                        <div className=" w-full ">
                            <label className="label">
                      Instractor Email</label>
                            <input type="email" placeholder="Email " className="input input-bordered input-error w-full " 
                            {...register("email", { required: true })} disabled/>
                        </div>

                      

                        <div className=" w-full ">
                            <label className="label">
                            Available seats</label>
                            <input type="number" placeholder="Available seats" className="input input-bordered input-error w-full " 
                            {...register("availableSeats", { required: true })}/>
                        </div>

                        <div className=" w-full ">
                            <label className="label">
                            Price</label>
                            <input type="number" placeholder="Price" className="input input-bordered input-error w-full " 
                            {...register("price", { required: true })}/>
                        </div>
                     </div>

                        

                        <input className='btn w-1/4  mt-5 border-red-500 mx-auto' type="submit" value='Add class' />
                    </form>
                </div>

            </Fade>

        </div>
    );
};

export default AddClass;