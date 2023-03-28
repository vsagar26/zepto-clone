import React from 'react';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


function PrivateRoute({children}) {
  const userData = useSelector((store) => {
    return store.userAuthReducer.user;
  })
  console.log(userData,"lll")
  const isAuth = userData?.uid;

    
    if(!isAuth)
    {
      return <Navigate to="/login"/>
    }
    // fix code here
    return children
}

export default PrivateRoute;
