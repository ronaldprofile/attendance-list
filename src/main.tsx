import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
