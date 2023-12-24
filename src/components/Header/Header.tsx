import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import { LOCAL_API_SERVER, PROD_API_SERVER } from '../../consts';
import React, { useEffect, useContext, useState } from "react"
import * as API from '../../generated/api'


export const Header = (): React.JSX.Element => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    if (authContext.authenticated) {
      // Log out
      (async () => {
        const authApi = new API.AuthRoutesApi(undefined, process.env.REACT_ENV == 'DEV' ? LOCAL_API_SERVER : PROD_API_SERVER)
        const response = await authApi.apiV1AuthLogOutPost({ withCredentials: true })
        if (response.status == 200) {
          authContext.setAuthenticated(false);
          navigate('/')
        }
      })()
    } else {
      navigate('/log-in')
    }

    if (isMenuOpen) {
      setIsMenuOpen(false)
    }

    return null
  }


  return (
    isMenuOpen ? <div className="opacity-100 bg-c-white z-20 top-0 left-0 w-full h-full fixed touch-none">
      <div className="flex justify-end">
        <button className="text-c-green p-4" onClick={() => setIsMenuOpen(false)}>
          <svg
            className="w-6 h-6 stroke-c-main"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col p-4 text-xl space-y-2">
        <a href="/" className="text-c-main ">Home</a>
        <a href="/about-us" className="text-c-main ">Über Uns</a>
        <a href="/calendar" className="text-c-main ">Kalender</a>
        {authContext.authenticated && <a href="/bibliothek" className="text-c-main ">Die Bibliothek</a>}
        <a href="/services" className="text-c-main ">Dienste</a>
        <a href="/contact-us" className="text-c-main ">Kontakt</a>
        <div className="border-2 h-1 w-full border-c-background"></div>

        <a href="#" className="text-c-main " onClick={handleClick}>{authContext.authenticated ? 'Abmeldung' : 'Anmeldung'}</a>
      </div>

    </div> :
      <header className="w-full text-white">
        {/* Hamburger menu button for smaller screens */}
        <div className="md:hidden absolute top-6 left-3">
          <button className="text-c-green" onClick={() => setIsMenuOpen(true)}>
            <svg
              className="w-6 h-6 stroke-c-main"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className="flex pt-4 pb-4 md:p-7 flex-col md:flex-row items-center justify-between">

          {/* Logo container on the left, center for small screens */}
          <div className="flex justify-center items-center space-x-4 text-c-green">
            <img src={require("@images/churchlogo-header.png")} alt="St. George Logo Header" className="h-auto object-contain w-[120px] md:w-[160px]"></img>
          </div>

          {/* Central navigation items */}
          <div className="flex items-center space-x-8 text-c-green font-bold invisible h-0 md:visible md:h-auto">
            <a href="/" className="hover:text-c-main">Home</a>
            <a href="/about-us" className="hover:text-c-main">Über Uns</a>
            <a href="/calendar" className="hover:text-c-main">Kalender</a>
            {authContext.authenticated && <a href="/bibliothek" className="hover:text-c-main">Die Bibliothek</a>}

            <a href="/services" className="hover:text-c-main">Dienste</a>
            <a href="/contact-us" className="hover:text-c-main">Kontakt</a>
          </div>

          {/* Right-aligned items (Login and Language) */}
          <div className="flex items-center space-x-4 text-c-green font-bold invisible h-0 md:visible md:h-auto">
            <a href="#" className="hover:text-c-main" onClick={handleClick}>{authContext.authenticated ? 'Abmeldung' : 'Anmeldung'}</a>
            <a aria-disabled='true' className="text-gray-300 font-arabic">عربي</a>
          </div>
        </div>
      </header>
  );
};