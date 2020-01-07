import Header from "./components/Header";
import React from "react";
import WeatherDisplay from "./components/weatherdisplay/WeatherDisplay";
import { WeatherProvider } from "./context/WeatherContext"


import './App.css';

function App() {
  return (
    <WeatherProvider>
      <Header/>
      <WeatherDisplay/>
    </WeatherProvider>
  );
}

export default App;
