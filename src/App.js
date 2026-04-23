import React, { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import { api } from "./utils/api";
import "./styles/App.css";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isWarm = typeof weather.main !== "undefined" && weather.main.temp > 16;

  const search = () => {
    if (query.trim() !== "") {
      setLoading(true);
      setError("");

      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.cod === "404" || result.cod === 404) {
            setError("City not found! Please try again.");
            setWeather({});
          } else {
            setWeather(result);
          }

          setLoading(false);
          setQuery("");
        })
        .catch(() => {
          setError("Something went wrong!");
          setLoading(false);
        });
    }
  };

  return (
    <div className={`app ${isWarm ? "warm" : ""}`}>
      <main>
        <Header />

        <SearchBox query={query} setQuery={setQuery} search={search} />

        {error && <div className="error-box">{error}</div>}

        {loading && <div className="loading">Fetching weather... ⏳</div>}

        {typeof weather.main !== "undefined" && !loading ? (
          <WeatherCard weather={weather} />
        ) : (
          !loading &&
          !error && (
            <div className="welcome-msg">
              <p>🌍 Search for any city to get live weather!</p>
            </div>
          )
        )}
      </main>
    </div>
  );
}

export default App;
