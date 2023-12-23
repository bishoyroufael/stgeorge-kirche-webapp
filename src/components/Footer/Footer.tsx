import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

export const Footer = (): React.JSX.Element => {
    const authContext = useContext(AuthContext);

    return (

            <div className="bg-c-green text-white p-2 font-roboto m-auto text-center md:text-start">
                <div className="flex flex-wrap p-6">
                    <div className="w-full lg:w-1/4 px-4 flex justify-center md:block">
                        <img src={require("@images/churchlogo-footer.png")} alt="St. George Logo Header" className="h-auto object-contain w-[120px] md:w-[160px]"></img>
                    </div>


                    <div className="w-full lg:w-1/4 px-4">
                        <h2 className="text-2xl font-semibold text-c-main pb-2">Links</h2>
                        <a href="/" className="block hover:text-c-main">Home</a>
                        <a href="/about-us" className="block hover:text-c-main">Über Uns</a>
                        <a href="/calendar" className="block hover:text-c-main">Kalender</a>
                        {authContext.authenticated && <a href="/bibliothek" className="hover:text-c-main">Die Bibliothek</a>}
                        <a href="/contact-us" className="block hover:text-c-main">Kontact</a>
                    </div>

                    <div className="w-full lg:w-1/4 px-4">
                        <h2 className="text-2xl font-semibold text-c-main pb-2">Dresden</h2>
                        <div className="">St. Petrus Kirche</div>
                        <div className="">Dohnaer Str. 53,</div>
                        <div className="">01219, Dresden</div>
                    </div>

                    <div className="w-full lg:w-1/4 px-4">
                        <h2 className="text-2xl font-semibold text-c-main pb-2">Leipzig</h2>
                        <div className="">St. Laurentius Kirche</div>
                        <div className="">Stötteritzer Str. 47,</div>
                        <div className="">04317, Leipzig</div>
                    </div>
                </div>
            </div>
    )
}