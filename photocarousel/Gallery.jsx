import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button.jsx';

const Gallery = ({list, openModal, closeModal, show}) => (
  <RoundedCorner>
    <MainWrapper>
      <Imgagery src={list.photos[0]}/>
    </MainWrapper>
    <SubWrapper>
      {list.photos.slice(1, 5).map((photo, index) => {
        return (<Grid primary>
            <Imgagery src={photo} key={index}/>
        </Grid>)
      })}
      <Button
        openModal={openModal}
        closeModal={closeModal}
        show={show}
        list={list}
      />
    </SubWrapper>
  </RoundedCorner>
)

const RoundedCorner = styled.div`
  border-radius: 12px;
  overflow-y: hidden;
`;

const Imgagery = styled.img`
  width: 100%;
  cursor: pointer;
  &: hover {
    -webkit-filter: brightness(90%);
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  };
`;

const MainWrapper = styled.div`
  max-width: 1120px;
  float: left;
  width: 49.5%;
  margin-right: 0.5%;
`;

const SubWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-flow: wrap;
  position: relative;
`;

const Grid = styled.div`
  margin-right: 1%;
  width: 49%;
  float: left;
  /* padding-bottom: ${props => props.primary ? '0.5%' : 'none'}; */
`;


export default Gallery;
