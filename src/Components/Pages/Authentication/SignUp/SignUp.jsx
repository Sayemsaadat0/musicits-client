import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
    return (
        <div>

            <div className="flex h-screen w-full items-center justify-center bg-black  bg-cover bg-no-repeat" >
                <div className="rounded-xl bg-gray-900 shadow-lg hover:shadow-red-500 px-16 py-10  backdrop-blur-md max-sm:px-8">
                    <div className="text-white">
                        <div className="mb-8 flex flex-col items-center">
                            <h1 className="mb-2 text-2xl">Login Here</h1>
                            <span className="">Enter Your Details</span>
                        </div>
                        <form className=' '>
                            <div className="mb-4 text-lg">
                                <input
                                    className="rounded-3xl border-none bg-red-500 px-6 py-2 placeholder-white text-center shadow-lg"
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Email" />
                            </div>

                            <div className="mb-4 text-lg">
                                <input
                                    className="rounded-3xl border-none bg-red-500 px-6 py-2 placeholder-white text-center shadow-lg"
                                    type="Password"
                                    name="name"
                                    placeholder="Your Password" />
                            </div>
                            <div className="mt-8 flex justify-center text-lg text-black">
                                <button
                                    type="submit"
                                    className="rounded-3xl w-full bg-red-500  px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-red-600">Sign up</button>
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