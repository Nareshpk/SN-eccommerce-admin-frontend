import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ScreenRoute = ( {children} ) => {
  const userAccount = useSelector((state) => state.userAccountCreation);
  const { accountInfo } = userAccount;

  return accountInfo && accountInfo.isAccountCreation ? children : <Navigate to="/accountcreation" /> 
};

export default ScreenRoute;