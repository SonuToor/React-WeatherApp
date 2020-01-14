import React from 'react';
import styled from "styled-components";
import WeatherTile from "./WeatherTile";

let DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 575px) {
    width: 75%;
  }

`
let DateTitle = styled.h3`
  font-weight: bold;
  position: sticky;
  top: 0;
  background-color: white;
`

// TO DO
  // 8 entries is a lot there's not enough room, in a column, to display all 8 weather entries
  // maybe choose only 4, but how to determine which ones to choose programatically? 

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