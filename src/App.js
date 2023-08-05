import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <small>
          <a
            href="https://github.com/mim-nikoo/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Maryam Nikoomanesh
        </small>
      </div>
    </div>
  );
}
