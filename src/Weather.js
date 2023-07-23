import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Madrid",
    temperature: 16,
    description: "cloudy",
    humidity: 80,
    wind: 10,
  };
  return (
    <div>
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              last updated:<span></span>
            </li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img src="http://openweathermap.org/img/w/01d.png" alt="Clear" />
              <div>
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>{" "}
                  |<a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span>{weatherData.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>
      <small>
        <a
          href="https://github.com/mim-nikoo/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Maryam Nikoomanesh
      </small>
    </div>
  );
}
