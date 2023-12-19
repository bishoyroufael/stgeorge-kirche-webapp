import React, { useContext, useEffect } from "react";
import { AuthContext } from "@components/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ component : Component })  => {

    const authContext = useContext(AuthContext);

    return (
        authContext.authenticated ? <Component/> : <Navigate to={'/log-in'}/>
    )
}