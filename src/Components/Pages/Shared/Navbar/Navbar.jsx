import { NavLink } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions =
        <div className="flex justify-between  items-center" >
            <NavLink className='mx-3' to='/'>Home</NavLink>
            <NavLink className='mx-3' to='/instractors'>Instractors</NavLink>
            <NavLink className='mx-3'  to='/classes'>Classes</NavLink>
            {
                user ?
                    <NavLink className='mx-3' to='/dashboard/dashboardhome'>Dashboard</NavLink>
                : <NavLink className='mx-3' to='login'>login</NavLink>
            }
        </div>


    return (
        <div  className="navbar bg-black flex justify-between text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <div className="hidden md:block">
                    <img className="w-20" src="https://i.ibb.co/RDVdLN4/woops.png" alt="" />
                </div>
                <div className="md:hidden">
                    <img className="rounded-full" width={40} height={40} src="https://i.ibb.co/1ngzXDJ/nav-Logo-SM.png" alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div>
                {
                    user ? <div className="flex items-center mx-2">
                             <button className='mx-4' onClick={handleLogOut}>Logut</button>
                    <img height={30} width={30} className="rounded-full" src={user.photoURL} alt="" />
                    </div> : <img height={30} width={30} className="rounded-full" src='' alt="sjsj" />
                }
            </div>

        </div>

    );
};

export default Navbar;

