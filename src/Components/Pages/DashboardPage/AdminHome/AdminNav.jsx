import React, { useState } from 'react';

const AdminNav = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full bg-white shadow-lg flex justify-between">
             <h2 className="text-2xl font-bold p-4">Good Morning Mr. X</h2>
             <img className='rounded-full w-10 h-10 mr-5' src="https://i.ibb.co/tJ2RvvM/5.png" alt="" /> 
        </nav>
    );
};

export default AdminNav;