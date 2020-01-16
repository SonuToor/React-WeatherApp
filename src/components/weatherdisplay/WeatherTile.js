import React from 'react';
import styled from "styled-components";

const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  color: rgb(116, 29, 223);
  &:hover {
    background-color: rgb(152, 87, 232);
    color: white;
  }
`


const WeatherTile = ({ data }) => {
  let temp = `${data.main.temp}°C`
  let timestamp = data["dt_txt"].slice(10, -3)
  let weather = data.weather[0].description
  let icon = data.weather[0].icon
  let iconSrc = `http://openweathermap.org/img/w/${icon}.png`
  console.log(data)
  return (
      <StyledTile>
        <p>{timestamp}</p>
        <p>{temp}</p>
        <img src={iconSrc} alt="weather image"/>
        <p>{weather}</p>
      </StyledTile>    
    )
}

export default WeatherTile;