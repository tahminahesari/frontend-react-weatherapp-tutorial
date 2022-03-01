import React, { useState, useEffect } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import TabBarMenu from "./components/tabBarMenu/TabBarMenu";
import MetricSlider from "./components/metricSlider/MetricSlider";
import "./App.css";
import axios from "axios";
import ForecastTab from "./pages/forecastTab"

const apiKey = "62780ad2de9b8538cfdd84ddaafdb93a";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");

  // Een callback functie (met de code die uitgevoerd wordt)
  useEffect(() => {
    // De dependency array (zodat we weten wanneer het uitgevoerd moet worden)
  }, []);

   // 1. we definieren de functie
  async function fetchData() {
    try {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`
      );
      console.log(result.data);
      setWeatherData(result.data);
    } catch (e) {
      console.error(e);
    }
  }
 
    // 2. we roepen de functie aan als location is veranderd,
    // maar niet als het een null/undefined/lege string is﻿
    if (location) {
  fetchData();
}
  // Bij Nova's code in Edhub werkt het wel, maar wrm is hier een "," ?
   // code wordt alleen afgevuurd als location veranderd
}, [location]);

  return <SearchBar setLocationHandler={setLocation} />;
  <>
    <div className="weather-container">
      {/*HEADER -------------------- */}
      <div className="weather-header">
      <SearchBar setLocationHandler={setLocation}/>
        

        <span className="location-details">
          {Object.keys(weatherData).length > 0 && (
            <>
              <h2>{weatherData.weather[0].description}</h2>
              <h3>{weatherData.name} </h3>
              <h1>{weatherData.main.temp}</h1>
            </>
          )}
          {/* <button type="button" onClick={fetchData}>
            Haal data op!
          </button> */}
        </span>
      </div>

      {/*CONTENT ------------------ */}
      <div className="weather-content">
        <TabBarMenu />

        <div className="tab-wrapper">
          <ForecastTab/>
        </div>
      </div>

      <MetricSlider />
    </div>
  </>

);
}


export default App;
