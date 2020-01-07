import React from 'react';
import styled from "styled-components";

let DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  border: solid 2px purple;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 575px) {
    width: 75%;
  }

`
let DateTitle = styled.h3`
  font-weight: bold;
`
let TempString = styled.p`
  color: rgb(116, 29, 223);
`

const IndividualDay = ({ date, forecast }) => {
  let temp = `${forecast.main.temp}°C`
  let weather = forecast.weather[0].icon
  let weatherIcon = `http://openweathermap.org/img/w/${weather}.png`
  return (
    <DayContainer>
      <DateTitle>
        {date}
      </DateTitle>
      <TempString>
        {temp}
      </TempString>
      <img src={weatherIcon} alt="weather image" />
    </DayContainer>
  )
}

export default IndividualDay;