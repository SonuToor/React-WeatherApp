import React from 'react';
import styled from "styled-components";

let Title = styled.h1`
  text-align: center;
  color: rgb(116, 29, 223);
  margin-top: 5%;
`

const WeatherTitle = ({ city }) => {

  return (
    <Title>
      {
        city ? `5 Day Forecast for ${city}`
        :
        `Input A City To Begin!`
      }
    </Title>
  )
}

export default WeatherTitle;