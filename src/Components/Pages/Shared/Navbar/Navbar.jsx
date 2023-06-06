import { NavLink } from "react-router-dom";



const Navbar = () => {

    const navOptions =
        <>
            <NavLink className='mx-3' to='/'>Home</NavLink>
            <NavLink className='mx-3' to='/register'>Instractors</NavLink>
            <NavLink className='mx-3'>Classes</NavLink>
            <NavLink className='mx-3' to='/appoinment'>Dashboard</NavLink>
            <NavLink className='mx-3' to='login'>login</NavLink>
        </>


    return (
        <div>
            <div className="navbar bg-black text-white flex justify-between">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  shadow bg-black rounded-box w-52">
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
                <div className="navbar-center  hidden lg:flex justify-between ">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div>
                    <img className="w-10 h-10 rounded-full" src="https://pixlr.com/images/index/remove-bg.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;