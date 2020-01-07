import React from "react";
import styled from "styled-components";
import WeatherForm from "./WeatherForm"


let StyledHeader = styled.header`
  text-align: center;
  background-color: rgb(116, 29, 223);
  color: #f7bc13;
  padding: 15px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <WeatherForm /> 
    </StyledHeader>
  )
}

export default Header;