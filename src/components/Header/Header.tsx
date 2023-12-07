import React from "react"


export const Header = (): React.JSX.Element => {
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
          {/* <a href="#" className="hover:text-c-main">Die Bibliothek</a> */}
          <a href="/contact-us" className="hover:text-c-main">Kontakt</a>
        </div>

        {/* Right-aligned items (Login and Language) */}
        <div className="flex items-center space-x-4 text-c-green font-bold">
          <a href="#" className="hover:text-c-main">Deutsch</a>
          <a href="#" className="hover:text-c-main font-arabic">عربي</a>
        </div>
      </div>
    </header>
  );
};