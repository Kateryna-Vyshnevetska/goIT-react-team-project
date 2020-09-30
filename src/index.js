import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { HomePage } from "./pages/homePage/HomePage";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
