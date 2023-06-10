import useAuth from '../../../../Hooks/useAuth';

const AdminNav = () => {
    const {user} = useAuth()
    return (
        <nav className="w-full bg-white shadow-lg flex justify-between">
             <p className='mx-4 font-bold mb-10'>Hey Mr. <span className='text-red-500 text-3xl'>{user.displayName}</span></p>
             <img className='rounded-full w-10 h-10 mr-5' src={user.photoURL} alt="" /> 
        </nav>
    );
};

export default AdminNav;