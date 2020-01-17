import React, { useState } from 'react';
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
  min-height: 220px;
  &:hover {
    background-color: rgb(152, 87, 232);
    color: white;
  }
`
const MainInfo = styled.div`
  margin-top: 10%;
  text-align: center;
`


const WeatherTile = ({ data }) => {
  let temp = `${data.main.temp}°C`
  let time = militaryTimeToStandard(data["dt_txt"].slice(10, -3))
  let weather = capitalizeString(data.weather[0].description)
  let icon = data.weather[0].icon
  const [showDetail, toggleShowDetails] = useState(false)
  let iconSrc = `http://openweathermap.org/img/w/${icon}.png`

  const showLess = () => {
    toggleShowDetails(false)
  }
  const showMore = () => {
    toggleShowDetails(true)
  }
  return (
      <StyledTile onMouseEnter={showMore} onMouseLeave={showLess}>
        <MainInfo>
          <h3>{time}</h3>
          <p>{temp}</p>
        </MainInfo>
        <img src={iconSrc} alt="weather image"/>
        {showDetail ? <p>{weather}</p> : null }
      </StyledTile>    
    )
}

export default WeatherTile;