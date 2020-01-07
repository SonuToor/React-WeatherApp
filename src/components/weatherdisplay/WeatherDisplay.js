import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import IndividualDay from "./IndividualDay";
import { WeatherContext } from "../../context/WeatherContext";
import WeatherTitle from "./WeatherTitle";
import { createArrayOfDates } from "../../utils";


let StyledContainer = styled.div`
  display: flex;
  width: 80%;
  margin-left: 10%;
  justify-content: center;
  @media (max-width: 575px) {
    flex-direction: column;
    width: 100%;
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
    else if (weather.cod !== "200") {
      return
    }
    else {
      setCity(weather.city.name)
      setForecast(weather.list)
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
          <IndividualDay key={day} date={day} forecast={forecast[index * 8]}/>
        )}

    </StyledContainer>
    </>
  )
}

export default WeatherDisplay;