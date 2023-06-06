import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { Vortex } from 'react-loader-spinner';



const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()


  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      </div>
    )
  }
  if (user) {

    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;