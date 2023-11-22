import React, { useState } from "react";
import {Key} from '../../../helpers/apiKey'

const TomorrowIOWeatherSearch = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = {Key}; // Reemplaza con tu propia clave de API

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (!apiKey) {
      setError("Por favor, proporciona una clave de API de Tomorrow.io");
      return;
    }

    // Realizar la llamada a la API para obtener datos del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q={florencio varela}&appid=f018d08290ce5a8ec517e007e8cafa3e`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setError(null);
      })
      .catch((err) => {
        console.error("Error al buscar la ciudad:", err);
        setError("Error al buscar la ciudad. Inténtalo de nuevo.");
      });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Ingresa la ciudad..."
          value={city}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      {error && <div>{error}</div>}
      {weatherData && <div>{JSON.stringify(weatherData)}</div>}
    </div>
  );
};

export default TomorrowIOWeatherSearch;
