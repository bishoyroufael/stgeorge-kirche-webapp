import React from "react";
import ReactDOMClient from "react-dom/client";
import { App } from "./App";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({once: true, duration: 2000});
const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App/>);
