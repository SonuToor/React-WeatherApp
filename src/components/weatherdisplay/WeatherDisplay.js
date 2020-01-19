import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import IndividualDay from "./IndividualDay";
import { WeatherContext } from "../../context/WeatherContext";
import WeatherTitle from "./WeatherTitle";
import { createArrayOfDates } from "../../utils";


let StyledContainer = styled.div`
  display: flex;
  width: 80%;
  border-radius: 10px;
  margin-left: 10%;
  justify-content: center;
  height: 55vh;
  overflow-y: scroll;
  @media (max-width: 575px) {
    margin: 0;
    width: 100%;
    height: 60vh;
  }
`


const WeatherDisplay = () => {
  const [weather] = useContext(WeatherContext);
  const [city, setCity] = useState(null)
  const [forecast, setForecast] = useState(null)

  let dates = createArrayOfDates(new Date())


  useEffect(() => {
    if (weather === null) {
      return
    }
    else {
      setCity(weather.city)
      setForecast(weather.weather)
    }
  }, [weather])

  return (
    <>
    <WeatherTitle city={city}/>
    <StyledContainer>
        {forecast === null ?
        null
        :
        dates.map((day, index) => 
          <IndividualDay key={day} date={day} forecast={forecast[index]}/>
        )}

    </StyledContainer>
    </>
  )
}

export default WeatherDisplay;