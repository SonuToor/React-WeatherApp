import React from 'react';
import styled from "styled-components";
import { capitalizeString, militaryTimeToStandard } from "../../utils";

const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: rgb(116, 29, 223);
  background-color: rgb(201, 174, 234);
  border: 0.5px solid white;
  &:hover {
    background-color: rgb(152, 87, 232);
    color: white;
  }
`
const MainInfo = styled.div`
  margin-top: 15%;
  display: flex;
`


const WeatherTile = ({ data }) => {
  let temp = `${data.main.temp}°C`
  let time = militaryTimeToStandard(data["dt_txt"].slice(10, -3))
  let weather = capitalizeString(data.weather[0].description)
  let icon = data.weather[0].icon
  let iconSrc = `http://openweathermap.org/img/w/${icon}.png`

  const showLess = () => {

    console.log('less')
  }
  const showMore = () => {
    // to do show more info
    console.log('more')
  }
  return (
      <StyledTile onMouseEnter={showMore} onMouseLeave={showLess}>
        <MainInfo>
          <p>{time}</p>
          <p>{temp}</p>
        </MainInfo>
        <img src={iconSrc} alt="weather image"/>
        <p>{weather}</p>
      </StyledTile>    
    )
}

export default WeatherTile;