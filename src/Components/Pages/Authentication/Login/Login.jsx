import React, { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'


const Login = () => {
    const { signInUser } = useAuth()
    const [error, setError] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const handlePasswordToggle = () => { setPasswordVisible(!passwordVisible); };
    const handlePasswordChange = (e) => { setPassword(e.target.value); };

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        signInUser(data.email, data.Password)
            .then(result => {
                const logedUser = result.user
                console.log(logedUser)
                Swal.fire( 
                    ' ',
                    'User Logged In succesFully',
                    'success'
                )
                navigate('/')
            })
            .catch(error => setError(error))
    };

    return (
        <div>
            <Helmet>
                <title>musicits || Login</title>
            </Helmet>

            <div className="flex h-screen x items-center justify-center background  bg-cover bg-no-repeat" >
                <div className="rounded-xl bg-gray-900 shadow-lg hover:shadow-red-500 px-16 py-10  backdrop-blur-md max-sm:px-8">
                    <div className="text-white">
                        <div className="mb-8 flex flex-col items-center">
                            <h1 className="mb-2 text-2xl">Login Here</h1>
                            <span className="">Enter Your Details</span>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4 text-lg">
                                <input
                                    {...register("email", { required: true })}
                                    className="border-none bg-red-500 px-6 py-2 placeholder-white text-center rounded-3xl w-full shadow-lg"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email" />
                            </div>
                            <div>
                                <div className="input-group-sm ">
                                    <input
                                        {...register("Password", { required: true })}
                                        type={passwordVisible ? 'text' : 'password'}
                                        id="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className="rounded-3xl w-full border-none bg-red-500 px-6 py-2 placeholder-white text-center shadow-lg"
                                        name="Password"
                                        placeholder="Your Password" />
                                    <span
                                        onClick={handlePasswordToggle} className="btn btn-ghost absolute right-16 rounded-3xl">
                                        {passwordVisible ? <BsEyeFill></BsEyeFill> : <BsEyeSlashFill></BsEyeSlashFill>}
                                    </span>
                                    <p>{error.message}</p>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-center text-lg text-black">
                                <button
                                    type="submit"
                                    className="bg-red-500 px-10 py-2 text-white w-full hover:bg-red-700 rounded-3xl">Login</button>
                            </div>
                            <div className='mt-4'>
                                <p>Do not have  an account? <Link className='text-red-500' to='/signup'>Sign Up</Link> here</p>
                            </div>
                            <div className='mx-auto text-center mt-10'>
                                <p>or login with</p>
                                <SocialLogin></SocialLogin>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;