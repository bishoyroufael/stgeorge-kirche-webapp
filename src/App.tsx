import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Home } from "./screens/Home";
import { ContactUs } from "./screens/ContactUs";
import { AboutUs } from "./screens/AboutUs";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

export const App = () => {
    return (
        <Router>
            <div className="mx-auto max-w-screen-xl">

            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact-us" element={<ContactUs/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
            </Routes>

            {/* Empty Space */}
            <div className="pt-20"></div>
            <Footer/>
            </div>
        </Router>
    )
}