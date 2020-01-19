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
  @media (max-width: 575px) {

  }
`
const MainInfo = styled.div`
  margin-top: 10%;
  margin-bottom: 3%;
  text-align: center;
  @media (max-width: 575px) {
    margin-top: 50%;
    margin-bottom: 2%;
  }
`
const WeatherIcon = styled.i`
  font-size: 40px;
  @media (max-width: 575px) {
    font-size: 25px;
  }

`

const WeatherTile = ({ data }) => {
  let temp = `${data.main.temp}°C`
  let time = militaryTimeToStandard(data["dt_txt"].slice(10, -3))
  let weather = capitalizeString(data.weather[0].description)
  let code = data.weather[0].id
  let dayOrNight = data.sys.pod

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
        <WeatherIcon className={returnIconClassName(code, dayOrNight)}/>
        {showDetail ? <p>{weather}</p> : null }
      </StyledTile>    
    )
}

export default WeatherTile;