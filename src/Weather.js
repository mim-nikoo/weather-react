import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
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
                  autoComplete="off"
                  autoFocus="on"
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
                last updated:
                <span>
                  <FormattedDate date={weatherData.date} />
                </span>
              </li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img
                  src="http://openweathermap.org/img/w/01d.png"
                  alt="Clear"
                />
                <div>
                  <strong>{Math.round(weatherData.temperature)}</strong>
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
                  Wind: <span>{Math.round(weatherData.wind)}</span> km/h
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
  } else {
    const apiKey = "b7fb433c7fddfa4844t24380290bd0do";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
