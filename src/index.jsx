import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";

import App from "./app";

const rootElemment = document.getElementById("root");

const root = ReactDOM.createRoot(rootElemment);

root.render(<App />);
