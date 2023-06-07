import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate()
    const { createUser, updateUserProfile, logOut } = useAuth()
    const onSubmit = data => {
        
        console.log(data)
         createUser(data.email , data.password)
        .then(result=>{
            const logedUser = result.user 
            console.log(logedUser)
            alert('user register')
            navigate('/login')
        })
        .catch(error=>console.log(error))
    };
    // todo  password and confirm password + regex + image url with password
    return (
        <div>

            <div className="flex h-screen w-full items-center justify-center background  bg-cover bg-no-repeat" >
                <div className="rounded-xl bg-gray-900 shadow-lg hover:shadow-red-500 px-16 py-10  backdrop-blur-md max-sm:px-8">
                    <div className="text-white">
                        <div className="mb-8 flex flex-col items-center">
                            <h1 className="mb-2 text-2xl">Sign Up here</h1>
                            <span className="">Enter Your Details</span>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4 text-lg">
                                <input
                                  {...register("name", { required: true })}
                                    className="rounded-3xl w-full border-none bg-red-500 px-6 py-2 placeholder-white text-center shadow-lg"
                                    type="text"
                                    name="name"
                                    placeholder="Your Name" />
                            </div>
                            <div className="mb-4 text-lg">
                                <input
                                  {...register("email", { required: true })}
                                    className="rounded-3xl w-full border-none bg-red-500 px-6 py-2 placeholder-white text-center shadow-lg"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email" />
                            </div>
                            <div className="mb-4 text-lg">
                                <input
                                  {...register("image-url", { required: true })}
                                    className="rounded-3xl w-full border-none bg-red-500 px-6 py-2 placeholder-white text-center shadow-lg"
                                    type="text"
                                    name="photo"
                                    placeholder="image-url" />
                                     {errors.immage && <span>photo is required</span>}
                            </div>

                            <div className="mb-4 text-lg">
                                <input
                                  {...register("password", { required: true })}
                                    className="rounded-3xl w-full border-none bg-red-500 px-6 py-2 placeholder-white text-center shadow-lg"
                                    type="Password"
                                    name="password"
                                    placeholder="Your Password" />
                            </div>
                            <div className="mb-4 text-lg">
                                <input
                                  {...register("confirm", { required: true })}
                                    className="rounded-3xl w-full border-none bg-red-500 px-6 py-2 placeholder-white text-center shadow-lg"
                                    type="Password"
                                    name="confirm"
                                    placeholder="Confirm Your Password" />
                            </div>
                            <div className="mt-8 flex justify-center text-lg text-black">
                                <button
                                    type="submit"
                                    className="rounded-3xl w-full bg-red-500  px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-red-600">Sign up</button>
                            </div>
                            <div className='mt-4'>
                                <p>Already have  an account? <Link className='text-red-500' to='/login'>Login</Link> here</p>
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

export default SignUp;