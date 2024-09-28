import { useEffect, useState } from "react";
import "./App.css";
import search_icon from "./assets/search.png"
import clear_icon from "./assets/clear.png"
import cloud_icon from "./assets/cloud.png"
import drizzle_icon from "./assets/drizzle.png"
import humidity_icon from "./assets/humidity.png"
import rain_icon from "./assets/rain.png"
import snow_icon from "./assets/snow.png"
import wind_icon from "./assets/wind.png"




function App() {

  const ID = "9505fd1df737e20152fbd78cdb289b6a";

  const search = async (city) => {
    try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=` + ID;

      const response = await fetch(URL);
      const data = response.json();
      console.log(data);

    }
    catch (error) {

    }
  }

  useEffect(() => {
    search("London");
  }, [])

  
  return (
    <>
      <div className="main">
        <div class="app-container">
          <header>
            <h1>Weather App</h1>
            <div class="search-container">
              <form>
                <input
                  type="text"
                  placeholder="Enter Your City"
                  class="search-input"
                />
                <button><img src={search_icon} alt="" style={{ color: "white" }} /></button>
              </form>
            </div>
          </header>
          <main>
            <div class="weather-card">
              <h2 class="city">Karachi</h2>
              <div class="weather-info">
                <div class="temperature">30°C</div>
                <br />
                <div class="condition">Cloudy</div>
              </div>
              <div class="icon-container">
                <img src={cloud_icon} alt="Sunny" class="weather-icon" />
              </div>
              <br />
              <div class="details">
                <div class="detail">
                  <img src={humidity_icon} alt="" /> Humidity <br />70%</div>
                <div class="detail"><img src={wind_icon} alt="" />  Wind Speed <br /> 10 Km/h</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
