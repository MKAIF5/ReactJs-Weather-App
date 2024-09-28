import { useState } from "react";
import "./App.css";
import search_icon from "./assets/search.png"

function App() {
  let ID = "9505fd1df737e20152fbd78cdb289b6a";
  let URL =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + ID;

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
                <button><img src={search_icon} alt=""  style={{color: "white"}}/></button>
              </form>
            </div>
          </header>
          <main>
            <div class="weather-card">
              <h2 class="city">Karachi</h2>
              <div class="weather-info">
                <div class="temperature">30°C</div>
                <div class="condition">Cloudy</div>
              </div>
              <div class="icon-container">
                <img src="sun-icon.svg" alt="Sunny" class="weather-icon" />
              </div>
              <br />
              <div class="details">
                <div class="detail">Humidity: 70%</div>
                <div class="detail">Wind Speed: 10 Km/h</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
