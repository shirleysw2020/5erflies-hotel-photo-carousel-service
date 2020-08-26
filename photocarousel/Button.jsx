import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

// refactored class component to use hooks
const Button = ({list, openModal, show}) => {
  return (
    <PhotoButton onClick={openModal}>Show all photos</PhotoButton>
  )
}

const PhotoButton = styled.button`
  position: absolute;
  bottom: 25px;
  right: 30px;
  width: 146px;
  cursor: pointer;
  letter-spacing: 0.2px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 450;
  border-radius: 7px;
  color: #000;
  height: 30px;
  background-color: #F7F7F7;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  border-width: 1px;
`;

export default Button;