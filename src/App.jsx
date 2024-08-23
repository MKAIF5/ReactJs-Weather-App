import { useState } from "react";
import "./App.css";

function App() {
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
              </form>
            </div>
          </header>
          <main>
            <div class="weather-card">
              <h2 class="city">New York</h2>
              <div class="weather-info">
                <div class="temperature">22°C</div>
                <div class="condition">Sunny</div>
              </div>
              <div class="icon-container">
                <img src="sun-icon.svg" alt="Sunny" class="weather-icon" />
              </div>
              <div class="details">
                <div class="detail">Humidity: 60%</div>
                <div class="detail">Wind Speed: 5 km/h</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
