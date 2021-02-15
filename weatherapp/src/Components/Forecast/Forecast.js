import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import "./Forecast.css";

const Forecast = () => {
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("imperial");
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  let [responseObj, setResponseObj] = useState({});

  function getForecast(e) {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }
    let uriEncodedCity = encodeURIComponent(city);

    // weather data fetch function will go here
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${uriEncodedCity}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "9fc3f7b9a5msh300c2f059432961p16210ejsn223d9da384ee",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.cod !== 200) {
          throw new Error();
        }

        setResponseObj(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);

        console.error(err);
      });
  }

  return (
    <div>
      <h1>Find current weather condition</h1>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          className="TextInput"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="Button">
          Get Forecast
        </button>
      </form>
      <Conditions
        responseObj={responseObj}
        error={error}
        loading={loading}
        className="conditions"
      />
    </div>
  );
};

export default Forecast;
