import React from 'react';
import styled from "styled-components";
import WeatherTile from "./WeatherTile";

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

const IndividualDay = ({ date, forecast }) => {
  return (
    <DayContainer>
       <DateTitle>
        {date}
      </DateTitle>
      {forecast.map(item => <WeatherTile data={item}/>)}
    </DayContainer>
  )
}

export default IndividualDay;