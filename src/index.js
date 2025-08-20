import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga4";
import { BrowserRouter as Router } from "react-router-dom";

ReactGA.initialize("G-HSDN2YLKBJ");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// Performance measurement
reportWebVitals();
