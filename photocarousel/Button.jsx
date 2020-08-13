import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';

// refactored class component to use hooks
const Button = ({list, openModal, show}) => {

  // const [open, setOpen] = useState(false);
  // console.log('clientb', listing);
  // new window show onclick
  // if (open === true) {
  //   return (<NewWindow>New Window</NewWindow>)
  // }
  return (
    <PhotoButton onClick={openModal}>Show more photos</PhotoButton>
  )
}

const NewWindow = styled.div`
  height: 100%;
  color: #D9F2F2;
`;

const PhotoButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 146px;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  border-radius: 7px;
  color: #000;
  height: 30px;
  background-color: #F7F7F7;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  border-width: 1px;
`;

export default Button;