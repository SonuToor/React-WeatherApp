import React from 'react';
import styled from "styled-components";
import WeatherTile from "./WeatherTile";

let DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: center;
  justify-content: flex-start;
`
let DateTitle = styled.h3`
  font-weight: bold;
  position: fixed;
  margin: 0;
  width: 16%;
  text-align: center;
  color: white;
  background-color: rgb(75, 10, 155);
  @media (max-width: 575px) {
    width: 20%;
  }

`
const IndividualDay = ({ date, forecast }) => {
  return (
    <DayContainer>
       <DateTitle>
        {date}
      </DateTitle>
      {forecast.map(item => <WeatherTile key={item.dt} data={item}/>)}
    </DayContainer>
  )
}

export default IndividualDay;