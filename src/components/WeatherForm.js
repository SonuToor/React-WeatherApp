import Button from './Button'
import CityInput from './CityInput'
import React, { useContext, useState } from 'react';
import styled from "styled-components";
import { createWeatherArrays } from "../utils";
import { WeatherContext } from "../context/WeatherContext";



const API_KEY = process.env.REACT_APP_WEATHERAPIKEY;

let StyledForm = styled.form`
  display: flex;
  width: 50%;
  margin-left: 25%;
  @media (max-width: 575px) {
    flex-direction: column;
  }
`

const WeatherForm = () => {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useContext(WeatherContext);
  let units = `metric`;

  const handleSubmit = (event) => {
    event.preventDefault();

    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=${units}`;
    
    fetch(API_URL)
      .then(res => res.json())
      .then(function(data) {
        if (data.cod !== "200") {
          return
        }
        else {
          let arrays = createWeatherArrays(data.list)
          let weatherData = {
            city: data.city.name,
            weather: arrays
          }
         setWeather(weatherData)
         console.log(weatherData)
        }
      })
    setCity("")
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <CityInput 
        city={city}
        setCity={setCity}/>
      <Button/>
    </StyledForm>
  )
}

export default WeatherForm;