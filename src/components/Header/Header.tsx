import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import { LOCAL_API_SERVER, PROD_API_SERVER } from '../../consts';
import React, { useEffect, useContext } from "react"
import * as API from '../../generated/api'


export const Header = (): React.JSX.Element => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(()=>{
  
    console.log("Header", authContext)
  
    },[authContext])

  const handleClick = () => {
    if (authContext.authenticated) {
      // Log out
      (async ()=>{
        const authApi = new API.AuthRoutesApi(undefined, process.env.REACT_ENV == 'DEV' ? LOCAL_API_SERVER : PROD_API_SERVER)
        const response = await authApi.apiV1AuthLogOutPost({ withCredentials : true })
        if (response.status == 200) {
          authContext.setAuthenticated(false);
          navigate('/')
        }
      })()
    } else {
      navigate('/log-in')
    }

    return null
  }

  return (
    <header className="w-full text-white">
      <div className="flex items-center justify-between p-7">
        {/* Logo container on the left */}
        <div className="flex items-center space-x-4 text-c-green">
          <img src={require("@images/churchlogo-header.png")} alt="St. George Logo Header" className="h-auto"></img>
        </div>

        {/* Central navigation items */}
        <div className="flex items-center space-x-8 text-c-green font-bold">
          <a href="/" className="hover:text-c-main">Home</a>
          <a href="/about-us" className="hover:text-c-main">Über Uns</a>
          {/* <a href="#" className="hover:text-c-main">Dienste</a> */}
          
          {authContext.authenticated && <a href="/bibliothek" className="hover:text-c-main">Die Bibliothek</a>}
          
          <a href="/contact-us" className="hover:text-c-main">Kontakt</a>
        </div>

        {/* Right-aligned items (Login and Language) */}
        <div className="flex items-center space-x-4 text-c-green font-bold">
          <a href="#" className="hover:text-c-main" onClick={handleClick}>{authContext.authenticated ? 'Log Out' : 'Log In'}</a>
          <a href="#" className="hover:text-c-main font-arabic">عربي</a>
        </div>
      </div>
    </header>
  );
};