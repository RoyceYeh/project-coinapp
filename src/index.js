import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./styles/style.css";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
