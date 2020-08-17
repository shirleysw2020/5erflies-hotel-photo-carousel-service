import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button.jsx';

const Gallery = ({list, openModal, closeModal, show}) => (

  <RoundedCorner>
    <MainWrapper>
      <Imgagery src={list.photos[0]} onClick={(e) => openModal(0)}/>
    </MainWrapper>
    <SubWrapper>
      {list.photos.slice(1, 5).map((photo, index) => {
        return (<Grid picIndex={index}>
            <Imgagery src={photo} key={index} onClick={(e) => openModal(index + 1)}/>
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
  border-radius: 13px;
  overflow: hidden;
  height: 372px;
`;

const Imgagery = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  display: block;
  &: hover {
    -webkit-filter: brightness(85%);
    -webkit-transition: all 0.6s ease;
    transition: all 0.6s ease;
  };
`;

const MainWrapper = styled.div`
  max-width: 1120px;
  float: left;
  width: 49.3%;
  margin-right: 0.7%;
`;

const SubWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-flow: wrap;
  position: relative;
`;

const Grid = styled.div`
  margin-right: ${props => props.picIndex % 2 === 0 ? '1.3%' : '0'};
  width: 49.35%;
  margin-bottom: ${props => props.picIndex < 2 ? '1.3%' : '0'};
  height: 45%;
  float: left;
  overflow: hidden;
`;


export default Gallery;
