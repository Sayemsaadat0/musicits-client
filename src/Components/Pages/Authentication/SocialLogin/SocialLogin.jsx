import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import { FcGoogle } from 'react-icons/fc'

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { googleLogin } = useAuth();

    const handlegooogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                const userData = {
                    email: loggeduser.email,
                    name: loggeduser.displayName,
                    role: 'student',
                };
                fetch('https://musicits-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => {
                       navigate('/');
                       
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <div className=''>
                <button onClick={handlegooogleLogin}>
                    <FcGoogle className='text-5xl mt-2'></FcGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
