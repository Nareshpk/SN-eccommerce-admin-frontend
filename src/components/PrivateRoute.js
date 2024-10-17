import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ( {children} ) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  // const userAdminin = useSelector((state) => state.userAdminin);
  // const { userInfo } = userAdminin;
  return userInfo ? children : <Navigate to="/signin" />;
//   return userInfo ? children : <Navigate to="/adminin" />;
};

export default PrivateRoute;
