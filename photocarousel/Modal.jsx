import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Modal = ({ list, closeModal, clickedPhotoIdx }) => {

  const [photoCount, setphotoCount] = useState(clickedPhotoIdx + 1);
  // var [photoCount, setphotoCount] = useState(1);
  const [morePhotosCount, setMorePhotosCount] = useState(1);
  // var [morePhotosButtonClicked, setMorePhotosButton] = useState(false);
  const clickedButton = () => {
    // setMorePhotosButton(!morePhotosButtonClicked);
    setphotoCount(morePhotosCount);
  }
  useEffect(() => {
    setphotoCount(clickedPhotoIdx + 1);
  }, [clickedPhotoIdx]);

  const addCount = () => {
    photoCount < list.photos.length && setphotoCount(photoCount + 1);
  };

  const minusCount = () => {
    photoCount > 1 && setphotoCount(photoCount - 1);
  };

  const RightArrow = ({ addCount }) => (
    <ArrowButton right onClick={addCount}>&gt;</ArrowButton>
  );

  const LeftArrow = ({ minusCount }) => (
    <ArrowButton left onClick={minusCount}>&lt;</ArrowButton>
  );

  useEffect(() => {
    console.log("component changed");
  }, []);

  return (
    // return the photo that its index matches the photoCount
    <div>
      <Closebutton onClick={closeModal} >X Close</Closebutton>
      <Wrappingdiv>
        {/* {console.log(photoCount)} */}
        <CountHeader>{photoCount}/{list.photos.length}</CountHeader>
        <ModalImage src={list.photos[photoCount - 1]}/>
        <LeftArrow minusCount={minusCount}/>
        <RightArrow addCount={addCount}/>
      </Wrappingdiv>
    </div>
  )
  // }
};

const Wrappingdiv = styled.div`
  text-align: center;
  margin: 0px auto;
  width: 980px;
`;

const Closebutton = styled.button`
  display: inline;
  float: left;
  top: 40px;
  left: 40px;
  position: absolute;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: #e0e0e0a6;;
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.5px;
  color: #222222e3;
  &: hover {
    background-color: #e0e0e0;
  }
`;

const CountHeader = styled.div`
  /* display: inline; */
  font-size: 1em;
  font-family: Arial;
  margin-top: 45px;
  font-family: Circular, Roboto, "Helvetica Neue",sans-serif;
  letter-spacing: 0.7px;
`;

const ModalImage = styled.img`
  width: 90%;
  margin-top: 40px;
`;

const ArrowButton = styled.button`
  border-radius: 50%
  border: 1px solid  #C5C5C5;
  font-size: 16px;
  background-color: white;
  position: fixed;
  top: 43%;
  left: ${props => props.right ? 'none' : '25px'};
  right: ${props => props.left ? 'none' : '45px'};
  padding: 14px 18px;
  cursor: pointer;
`;


export default Modal;