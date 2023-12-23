import React, { useState, createContext, useEffect } from 'react';
import * as API from '../../generated/api';
import { LOCAL_API_SERVER, PROD_API_SERVER } from '../../consts';
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(undefined);

  useEffect(() => {
    const authApi = new API.AuthRoutesApi(undefined, process.env.REACT_ENV == 'DEV' ? LOCAL_API_SERVER : PROD_API_SERVER)
    authApi.apiV1AuthIsLoggedGet({ withCredentials: true }).then((response) => {
      // console.log('user authenticated from server!')
      setAuthenticated(true);
    }).catch((err)=>{
      // console.log('user not authenticated from server!')
      setAuthenticated(false)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};




export const AuthConsumer = AuthContext.Consumer;