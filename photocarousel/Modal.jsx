import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RightArrow from './RightArrow.jsx';

const Modal = ({list, closeModal, show}) => {
  // error: photoCount is read only??
  const [photoCount, setphotoCount] = useState(1);
  const addCount = () => setphotoCount(photoCount++);
  const minusCount = () => setphotoCount(photoCount--);

  // const RightArrow = ({addCount}) => (
  //   <Arrow onClick={addCount}>></Arrow>
  // )
  // const LeftArrow = ({minusCount}) => (
  //   <Arrow onClick={minusCount}>Hi</Arrow>
  // )

  return (
    // return the photo that its index matches the photoCount
    <Wrappingdiv>
        <CountHeader>{photoCount}/{list.photos.length}</CountHeader>
        <ModalImage src={list.photos[photoCount - 1]}/>
        {/* onclick right arrow, num++, left arrow appears */}
        <RightArrow addCount={addCount}/>
    </Wrappingdiv>
  )
}
// const Arrow = styled.button`
//   border-radius: 50%
//   border: 1px solid  #C5C5C5;
//   font-size: 16px;
//   background-color: white;
// `;
const Wrappingdiv = styled.div`
  text-align: center;
  margin: 0px auto;
  width: 980px;
`;

const CountHeader = styled.div`
  font-size: 14px;
  font-family: Arial;
`;

const ModalImage = styled.img`
  width: 100%;
  margin-top: 90px;
`;


export default Modal;