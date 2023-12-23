import React, { useState, createContext, useEffect } from 'react';
import * as API from '../../generated/api';
import { LOCAL_API_SERVER, PROD_API_SERVER } from '../../consts';
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
    useEffect(()=>{
        (async ()=>{
            const authApi = new API.AuthRoutesApi(undefined, process.env.REACT_ENV == 'DEV' ? LOCAL_API_SERVER : PROD_API_SERVER)
            const response = await authApi.apiV1AuthIsLoggedGet({withCredentials: true})
            if (response.status == 200){
                // console.log('user authenticated from server!')
                setAuthenticated(true);
            } else {
                // console.log('user not authenticated from server!')
                setAuthenticated(false)
            }
        })()
    },[])

  return (
    <AuthContext.Provider value={{authenticated, setAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;