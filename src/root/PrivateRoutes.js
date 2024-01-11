import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/Auth';

export const PrivateRoute = ({ children, path, ...rest }) => {
  let auth = useAuth();
  if (!auth[0].token) {
    return <Navigate to='/' replace />;
  }
  return children;
};

export default PrivateRoute;
