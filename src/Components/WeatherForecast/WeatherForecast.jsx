import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './WeatherForecast.css';
import search from '../../assets/search.png';

const WeatherForecast = () => {
  const [city, setCity] = useState('Nairobi');
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [conditions, setConditions] = useState([]);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},KE&units=metric&appid=7daba6b172478648a2ea69dc2d734324`
      );
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
      setLoading(false);
    }
  };

  const fetchWeatherConditions = async () => {
    try {
      const cities = ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret'];
      const requests = cities.map((city) =>
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},KE&units=metric&appid=7daba6b172478648a2ea69dc2d734324`
        )
      );
      const responses = await Promise.all(requests);
      setConditions(responses.map((response) => response.data));
    } catch (error) {
      console.error('Error fetching weather conditions:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
    fetchWeatherConditions();
  }, [city]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCity(query);
  };

  const handleImageClick = () => {
    setCity(query);
  };

  const getColor = (description) => {
    if (description.includes('rain') || description.includes('storm')) {
      return 'red';
    } else if (description.includes('cloud')) {
      return 'blue';
    } else {
      return 'green';
    }
  };

  return (
    <div className="weather-forecast-background">
      <div id="weather-forecast">
        <h2>Weather Forecast</h2>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Enter city or area"
            className="search-input"
          />
          <img 
            className='search-button'
            src={search}
            alt='search icon'
            onClick={handleImageClick}
          />
        </form>
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">Error: {error}</div>}
        {weatherData && (
          <div className="weather-data">
            <h3>Weather Forecast for {weatherData.name}</h3>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        )}
      </div>
      <div className="map-container">
        <MapContainer center={[-1.286389, 36.817223]} zoom={6} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {conditions.map((condition) => (
            <CircleMarker
              key={condition.id}
              center={[condition.coord.lat, condition.coord.lon]}
              radius={10}
              color={getColor(condition.weather[0].description)}
            >
              <Popup>
                <div>
                  <h3>{condition.name}</h3>
                  <p>Temperature: {condition.main.temp}°C</p>
                  <p>Weather: {condition.weather[0].description}</p>
                  <p>Humidity: {condition.main.humidity}%</p>
                  <p>Wind Speed: {condition.wind.speed} m/s</p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default WeatherForecast;
