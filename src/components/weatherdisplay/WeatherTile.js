import React, { useState } from 'react';
import styled from "styled-components";
import { capitalizeString, militaryTimeToStandard, returnIconClassName } from "../../utils";
import  "../../../node_modules/weather-icons/css/weather-icons.css"

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

// TO DO 
  // tranform size 1.5x when tile is hovered over
const WeatherIcon = styled.i`


`

// TO DO 
  // dayOrNight seem to be giving me inconsistent results for when m or 
  // should be. Isolate dayOrNight try using the debugger and figure it out.


const WeatherTile = ({ data }) => {
  let temp = `${data.main.temp}°C`
  let time = militaryTimeToStandard(data["dt_txt"].slice(10, -3))
  let weather = capitalizeString(data.weather[0].description)
  let code = data.weather[0].id
  let dayOrNight = data.sys.pod

  console.log(code, dayOrNight)
  console.log(returnIconClassName(code, dayOrNight))
  const [showDetail, toggleShowDetails] = useState(false)

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
        {/* <p>{returnIconClassName(code, dayOrNight)}</p> */}
        {/* <p>{code}{dayOrNight}</p> */}
        <WeatherIcon>
          <i className={returnIconClassName(code, dayOrNight)}></i>
        </WeatherIcon>
        {showDetail ? <p>{weather}</p> : null }
      </StyledTile>    
    )
}

export default WeatherTile;