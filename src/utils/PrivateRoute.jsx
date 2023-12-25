/* eslint-disable react/prop-types */

import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const PrivateRoute = ({children}) => {

  const { user } = useAuth();

  let location = useLocation();

  return user?.email ? (
    children
  ) : (
    <Navigate to="/login"/>
  );
};

export default PrivateRoute;