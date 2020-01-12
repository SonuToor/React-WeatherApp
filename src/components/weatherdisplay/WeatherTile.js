import React from 'react';
import styled from "styled-components";
  // let weather = forecast.weather[0].icon
  // let weatherIcon = `http://openweathermap.org/img/w/${weather}.png`

const WeatherTile = ({ data }) => {
    let temp = `${data.main.temp}°C`
    let timestamp = data["dt_txt"]
    console.log(data)
    return(
        <div>
            <p>{temp}</p>
            <p>{timestamp}</p>
        </div>
    )
}

export default WeatherTile;