import axios from 'axios';
import { useRef, useState } from 'react';
import './App.css';
import WeatherCard from './WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const audioRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  const API_KEY = "9e5b44772c5e0629783fb69ce9dc0219";

  const fetchWeather = async () => {
  if (!city) return;
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    setWeather(res.data);

    if (audioRef.current) {
      audioRef.current.play().catch((e) => {
        console.log("Play blocked");
      });
    }
  } catch (error) {
    alert('City not found');
    setWeather(null);
  }
};
const handleKeyDown = (e) => {
  if (e.key === 'Enter') fetchWeather();
};

  return (
  <>
    
    <div className="bg-animated"></div>
    <audio ref={audioRef} src="/sounds/storm.mp3" loop />
    <div className={darkMode ? 'app dark' : 'app'}>
      <button onClick={() => setDarkMode(!darkMode)}>
   {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
      <h1>🌤️ Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={fetchWeather}>Search</button>
      {weather && <WeatherCard weather={weather} />}
    </div>
  </>
);


}

export default App;
