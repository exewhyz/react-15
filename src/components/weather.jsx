import React, { useEffect, useState } from "react";

const url =
  "http://api.weatherapi.com/v1/current.json?key=cc51a035fb6647b6bc445321250412&q=Paris";

export default function Weather() {
  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
        <h3>Weather: {weatherData.current.temp_c}</h3>
        {error && <p>{error}</p>}
    </div>
  );
}
