import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img
          src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`}
          alt={props.data.condition.description}
        />
      </div>
      <span className="WeatherForecasr-temperature-max">
        {Math.round(props.data.temperature.maximum)}°
      </span>
      <span className="WeatherForecasr-temperature-min">
        {Math.round(props.data.temperature.minimum)}°
      </span>
    </div>
  );
}
