import React from 'react';

const WeatherCard = ({ weather }) => {
  const { name, main, weather: details, wind } = weather;
  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>{details[0].main} - {details[0].description}</h3>
      <p>🌡️ Temp: {main.temp} °C</p>
      <p>💧 Humidity: {main.humidity}%</p>
      <p>🌬️ Wind: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
