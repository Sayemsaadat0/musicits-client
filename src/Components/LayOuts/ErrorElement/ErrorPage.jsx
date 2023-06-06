import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div>
            <img className='w-full' src='https://i.ibb.co/3szZjrH/woops.png' alt="ss" />
            <div className='flex justify-center'>
            <Link className='button' to='/'>Go back  Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;