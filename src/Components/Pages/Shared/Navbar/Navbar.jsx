import { NavLink } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import { FaBars } from 'react-icons/fa';
import LayoutConTainer from "../../../LayOutContainer/LayoutConTainer";



const Navbar = () => {
    const { user, logOut } = useAuth()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions =
        <div className="flex justify-between items-center">
            <NavLink className='mx-3' to='/'>Home</NavLink>
            <NavLink className='mx-3' to='/register'>Instractors</NavLink>
            <NavLink className='mx-3'>Classes</NavLink>
            {
                user ? <div className="flex justify-between items-center">
                    <NavLink className='mx-3' to='/appoinment'>Dashboard</NavLink>
                    <button className='mx-4' onClick={handleLogOut}>Logut</button>
                    <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                </div> : <NavLink className='mx-3' to='login'>login</NavLink>
            }
        </div>


    return (
        <div className="w-full bg-black shadow-xl">
            <LayoutConTainer>
                <div className="flex items-center md:justify-between">
                    <div className="dropdown md:hidden lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBars className="text-white"></FaBars>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm flex flex-col dropdown-content mt-3 p-2 bg-base-100 text-black shadow  rounded-box w-52 h-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div>
                        <div className="hidden md:block">
                            <img className="w-20" src="https://i.ibb.co/RDVdLN4/woops.png" alt="" />
                        </div>
                        <div className="md:hidden">
                            <img className="rounded-full" width={40} height={40} src="https://i.ibb.co/1ngzXDJ/nav-Logo-SM.png" alt="" />
                        </div>
                    </div>
                <div className="text-white hidden md:block">
                {navOptions}
                </div>
                </div>
            </LayoutConTainer>
        </div>
    );
};

export default Navbar;





<div className="navbar bg-black shadow-lg text-white md:flex justify-between max-w-screen-xl  fixed top-0">
    <div className="navbar-start ">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
            
            </label>
            <ul tabIndex={0} className="menu menu-sm flex flex-col dropdown-content mt-3 p-2 bg-base-100 text-black shadow  rounded-box w-52 h-52">
                {/* {navOptions} */}
            </ul>
        </div>
        {/* <div className="hidden md:block">
            <img className="w-20" src="https://i.ibb.co/RDVdLN4/woops.png" alt="" />
        </div>
        <div className="md:hidden">
            <img className="rounded-full" width={40} height={40} src="https://i.ibb.co/1ngzXDJ/nav-Logo-SM.png" alt="" />
        </div> */}
    </div>
    <div className="navbar-center  hidden lg:flex justify-between ">
        <ul className="menu menu-horizontal px-1">
            {/* {navOptions} */}

        </ul>
    </div>
    <div>

    </div>
</div>