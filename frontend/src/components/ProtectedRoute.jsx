import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Login from '../pages/Login';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { token, user } = useContext(AuthContext);

  if (!token) return <Login />;
  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <div className="p-8 text-center text-red-500 font-bold">403 - Unauthorised View Access</div>;
  }

  return children;
};

export default ProtectedRoute;