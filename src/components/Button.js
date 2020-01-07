import React from 'react';
import styled from "styled-components";

let StyledButton = styled.button`
  background-color: white;
  color: rgb(116, 29, 223);
  flex: 1;
  border-radius: 0;
  margin-left: 25px;
  border: 2px solid transparent;
  font-size: 24px;
  transition: 0.3s ease;
  &:hover {
      border: 2px solid #293858;
      background-color: #f7bc13;
      color: #293858;
  }
  @media (max-width: 575px) {
      margin-left: 0;
      margin-top: 25px;
  }
`

const Button = () => {
  return (
    <StyledButton>
      Get Weather!
    </StyledButton>
  )
}

export default Button;