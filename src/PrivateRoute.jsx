import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading}=use(AuthContext);
    const location=useLocation();
    if(loading)
    {
        return <h1>Loading...........</h1>
    }
    if(user)
    {
        return children;
    }
    return <Navigate state={location?.pathname} to="/signInWith"></Navigate>
};

export default PrivateRoute;