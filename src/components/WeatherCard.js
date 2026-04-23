import React from "react";
import { dateBuilder, getWeatherIcon, getDayNight } from "../utils/helpers";

function WeatherCard({ weather }) {
  const dayNight = getDayNight();

  return (
    <div className="weather-card">
      <div className="weather-icon">
        {getWeatherIcon(weather.weather[0].main)}
      </div>

      <div className="location">
        {weather.name}, {weather.sys.country}
      </div>

      <div className="date">{dateBuilder(new Date())}</div>

      <div className="temp">{Math.round(weather.main.temp)}°C</div>

      <div className="weather-desc">{weather.weather[0].description}</div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-icon">💧</span>
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{weather.main.humidity}%</span>
        </div>

        <div className="detail-item">
          <span className="detail-icon">🌡️</span>
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">
            {Math.round(weather.main.feels_like)}°C
          </span>
        </div>

        <div className="detail-item">
          <span className="detail-icon">💨</span>
          <span className="detail-label">Wind</span>
          <span className="detail-value">{weather.wind.speed} m/s</span>
        </div>

        <div className="detail-item">
          <span className="detail-icon">👁️</span>
          <span className="detail-label">Min / Max</span>
          <span className="detail-value">
            {Math.round(weather.main.temp_min)}° /{" "}
            {Math.round(weather.main.temp_max)}°
          </span>
        </div>

        <div className="day-night">
          <span>{dayNight.icon}</span>
          <span>{dayNight.label}</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
