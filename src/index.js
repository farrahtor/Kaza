import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "../src/assets/sass/index.scss";
import App from "./components/App.jsx";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
