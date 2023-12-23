import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Home } from "./screens/Home";
import { ContactUs } from "./screens/ContactUs";
import { AboutUs } from "./screens/AboutUs";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { getLastTenChurchEvents, getNextThreeEvents } from "./sheets/utils";
import { LogIn } from "./screens/LogIn";
import { Bibliothek } from "./screens/Bibliothek";
import { AuthProvider } from "@components/AuthContext";
import { ProtectedRoute } from "@components/ProtectedComponent/ProtectedComponent";
require('dotenv').config()


export const App = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        (async () => {
            const events = await getLastTenChurchEvents();
            setEvents(events);
        })()

    }, [])

    return (
        <Router>
            <div className="mx-auto w-[95%] lg:w-[60%]">
                <AuthProvider>

                    <Header />
                    <Routes>
                        <Route path="/" element={<Home nextThreeEvents={getNextThreeEvents(events)} />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/log-in" element={<LogIn />} />
                        <Route path="/bibliothek" element={<ProtectedRoute component={Bibliothek} />} />

                    </Routes>

                    {/* Empty Space */}
                    <div className="pt-20"></div>
                    <Footer />
                </AuthProvider>
            </div>
        </Router>
    )
}