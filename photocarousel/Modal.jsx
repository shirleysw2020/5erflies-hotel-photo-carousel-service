import React, { useState, useEffect } from 'react';
import styled ,{ keyframes } from 'styled-components';
// import RightArrow from './RightArrow.jsx';

const Modal = ({list, closeModal, show}) => {
  // error: photoCount is read only??
  const [photoCount, setphotoCount] = useState(1);
  const addCount = () => {
    if (photoCount < list.photos.length) {
      // previous bug: setphotoCount(photoCount++); read-only prop!
      setphotoCount(photoCount + 1);
    }
  };

  const minusCount = () => {
    if (photoCount > 1) {
      setphotoCount(photoCount - 1);
    }
  };

  const RightArrow = ({addCount}) => (
    <ArrowButton right onClick={addCount}>
    &gt;
    </ArrowButton>
  );

  const LeftArrow = ({minusCount}) => (
    <ArrowButton left onClick={minusCount}>
    &lt;
    </ArrowButton>
  );

  return (
    // return the photo that its index matches the photoCount
    <div>
      {/* <SlideModal> */}
      <Closebutton onClick={closeModal}>X Close</Closebutton>
      <Wrappingdiv>
      <CountHeader>{photoCount}/{list.photos.length}</CountHeader>
        <ModalImage src={list.photos[photoCount - 1]}/>
        {/* onclick right arrow, num++, left arrow appears */}
        <LeftArrow minusCount={minusCount}/>
        <RightArrow addCount={addCount}/>
      </Wrappingdiv>
      {/* </SlideModal> */}
    </div>
  )
};

// const SlideModal = styled.div`
//   transform: translateY(0%);
//   animation: SlideUp 1s forwards;
// `;

// const SlideUp = keyframes`
//   0% {
//     transform: translateY(100%);
//   }
//   100% {
//     transform: translateY(0%);
//   }
// `;

const Wrappingdiv = styled.div`
  position: relative;
  text-align: center;
  margin: 0px auto;
  width: 980px;
  margin-top: 45px;
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
`;

const CountHeader = styled.div`
  display: inline;
  font-size: 1em;
  font-family: Arial;
  margin-top: 45px;
  font-family: Circular, Roboto, "Helvetica Neue",sans-serif;
  letter-spacing: 0.7px;
`;

const ModalImage = styled.img`
  width: 100%;
  margin-top: 40px;
  margin-top: 50px;
`;

const ArrowButton = styled.button`
  border-radius: 50%
  border: 1px solid  #C5C5C5;
  font-size: 16px;
  background-color: white;
  position: absolute;
  top: 390px;
  left: ${props => props.right ? '1350px' : 'none'};
  right: ${props => props.left ? '1350px' : 'none'};
  padding: 14px 18px;
  cursor: pointer;
`;




export default Modal;