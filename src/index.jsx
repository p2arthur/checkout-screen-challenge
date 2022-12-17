import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";

import App from "./app";
import { NavigationProvider } from "./context/NavigationContext";

const rootElemment = document.getElementById("root");

const root = ReactDOM.createRoot(rootElemment);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
