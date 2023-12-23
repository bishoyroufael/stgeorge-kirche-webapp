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
import { getChurchEvents, getNextNEvents } from "./sheets/utils";
import { LogIn } from "./screens/LogIn";
import { Bibliothek } from "./screens/Bibliothek";
import { AuthProvider } from "@components/AuthContext";
import { ProtectedRoute } from "@components/ProtectedComponent/ProtectedComponent";
import { Calendar } from "./screens/Calendar";
require('dotenv').config()


export const App = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        (async () => {
            const events = await getChurchEvents();
            setEvents(events);
        })()

    }, [])

    return (
        <Router>
            <div className="mx-auto w-[95%] lg:w-[60%]">
                <AuthProvider>

                    <Header />
                    <Routes>
                        <Route path="/" element={<Home nextThreeEvents={getNextNEvents([...events], 3)} />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/log-in" element={<LogIn />} />
                        <Route path="/bibliothek" element={<ProtectedRoute component={Bibliothek} />} />
                        <Route path="/calendar" element={<Calendar events={events}/>} />
                    </Routes>

                    {/* Empty Space */}
                    <div className="pt-20"></div>
                    <Footer />
                </AuthProvider>
            </div>
        </Router>
    )
}