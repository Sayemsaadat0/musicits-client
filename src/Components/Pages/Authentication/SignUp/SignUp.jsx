import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate()
    const { createUser, updateUserProfile, logOut } = useAuth()
    const onSubmit = data => {
        console.log(data)
        if(data.password === data.confirm){
            createUser(data.email, data.password, data.PhotoUrl)
            .then(result => {
                const loggedUser = result.user
                updateUserProfile(data.name, data.PhotoUrl)
                    .then(() => {
                        const savedUser = { email: data.email, name: data.name , role: 'student' }
                        fetch('http://localhost:4444/user', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    logOut()
                                        .then(() => {
                                            navigate('/login')
                                        })
                                }
                            })
                            .catch(error => console.log(error))
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            })
        }
    };
    
    
    // Asdfgh1#
    return (
        <div>
            <Helmet>
                <title>musicits || Sign up</title>
            </Helmet>

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
                                {errors.name && <span >This field is required</span>}
                            </div>
                            <div className="mb-4 text-lg">
                                <input
                                    {...register("email", { required: true })}
                                    className="rounded-3xl w-full border-none bg-red-500 px-6 py-2 placeholder-white text-center shadow-lg"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email" />
                                {errors.email && <span >This field is required</span>}
                            </div>
                            <div className="mb-4 text-lg">

                                <input
                                    {...register("image_url", { required: true })}
                                    className="rounded-3xl w-full border-none bg-red-500 px-6 py-2 placeholder-white text-center shadow-lg"
                                    type="text"
                                    name="image_url"
                                    placeholder="photo" />
                                {errors.image_url && <span>photo is required</span>}
                            </div>

                            <div className="mb-4 text-lg">
                                <input
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/
                                    })}
                                    className="rounded-3xl w-full border-none bg-red-500 px-6 py-2 placeholder-white text-center shadow-lg"
                                    type="Password"
                                    name="password"
                                    placeholder="Your Password" />
                                {errors.password?.type === 'required' && <p>password is required</p>}
                                {errors.password?.type === 'minLength' && <p>password must be 6 character</p>}
                                {errors.password?.type === 'pattern' && <p>password must have an uppercase , a special case and  more than 6 character</p>}
                            </div>
                            <div className="mb-4 text-lg">
                                <input
                                   {...register("confirm", { required: true })}
                                    className="rounded-3xl w-full border-none bg-red-500 px-6 py-2 placeholder-white text-center shadow-lg"
                                    type="Password"
                                    name="confirm"
                                    placeholder="Confirm Your Password" />
                                 {errors.confirm && <p>dsdsd</p>}
                            </div>
                            <div className="mt-8 flex justify-center text-lg text-black">
                                <button
                                    type="submit"
                                    className="rounded-3xl w-full bg-red-500  px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-red-600">Sign up</button>
                            </div>
                            <div className='mt-4'>
                                <p>Already have  an account? <Link className='text-red-500' to='/login'>Login</Link> here</p>
                            </div>
                            <div className='mx-auto flex justify-center items-center gap-4 text-center mt-10'>
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