import React from 'react';
import styled from "styled-components";


let Input = styled.input`
  background-color: white;
  color: rgb(116, 29, 223);
  padding-left: 15px;
  font-size: 24px;
  border: 2px solid #293858;
  @media (max-width: 575px) {
    text-align: center;
  }

`

const CityInput = (props) => {

  const { city, setCity } = props;

  return (
    <Input 
      value={city}
      onChange={e => setCity(e.target.value)}
      placeholder="Enter a city"
      required
      />
  )
}

export default CityInput;