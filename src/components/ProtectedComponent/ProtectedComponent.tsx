import React, { useContext, useEffect } from "react";
import { AuthContext } from "@components/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ component: Component }) => {
    const authContext = useContext(AuthContext);
    
    return (
        // loading
        authContext.authenticated === undefined ?
            <div></div> :
            // Redirect to login if not authenticated
            authContext.authenticated === true ? <Component /> :
                <Navigate to={'/log-in'} />
    )
}