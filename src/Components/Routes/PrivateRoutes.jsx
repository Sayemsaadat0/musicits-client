import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()


  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    )
  }
  if (user) {

    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;