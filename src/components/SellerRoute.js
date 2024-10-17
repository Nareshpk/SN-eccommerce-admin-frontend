import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const SellerRoute = ( {children} ) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  // const useAdminin = useSelector((state) => state.useAdminin);
  // const { useInfo } = useAdminin;
  return userInfo && userInfo.isSeller ? children : <Navigate to="/signin" />;
  // return userInfo && userInfo.isSeller ? children : <Navigate to="/adminin" />;
};


export default SellerRoute;