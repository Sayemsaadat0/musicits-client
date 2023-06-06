import React, { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { BsEyeFill ,BsEyeSlashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const handlePasswordToggle = () => {setPasswordVisible(!passwordVisible);};
    const handlePasswordChange = (e) => {setPassword(e.target.value);};

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Login submitted!');
    };
    return (
        <div>

            <div className="flex h-screen w-full items-center justify-center bg-black  bg-cover bg-no-repeat" >
                <div className="rounded-xl bg-gray-900 shadow-lg hover:shadow-red-500 px-16 py-10  backdrop-blur-md max-sm:px-8">
                    <div className="text-white">
                        <div className="mb-8 flex flex-col items-center">
                            <h1 className="mb-2 text-2xl">Login Here</h1>
                            <span className="">Enter Your Details</span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 text-lg">
                                <input
                                    className="border-none bg-red-500 px-6 py-2 placeholder-white text-center  shadow-lg"
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Email"/>
                            </div>
                            <div>
                                <div className="input-group-sm">
                                    <input
                                         type={passwordVisible ? 'text' : 'password'}
                                         id="password"
                                         value={password}
                                         onChange={handlePasswordChange} 
                                        placeholder="password"
                                        className="border-none bg-red-500 px-6 py-2 placeholder-white text-center  shadow-lg"/>
                                    <span onClick={handlePasswordToggle} className="btn btn-ghost ">
                                        {passwordVisible ? <BsEyeFill></BsEyeFill> : <BsEyeSlashFill></BsEyeSlashFill>}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-center text-lg text-black">
                                <button
                                    type="submit"
                                    className="bg-red-500 px-10 py-2 text-white w-full hover:bg-red-700">Login</button>
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