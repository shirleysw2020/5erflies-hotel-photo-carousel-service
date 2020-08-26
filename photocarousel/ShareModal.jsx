import React from 'react';
import styled from 'styled-components';

const ShareModal = ({shareModalOpen, forShareModalOpen}) => {
  return (
    <div>
      <Wrapper shareModalOpen>Share with Friends</Wrapper>
      <Close onClick={forShareModalOpen}>X</Close>
    </div>
  )
}

const Wrapper = styled.div`
  display: ${props => props.shareModalOpen ? 'inline-block' : 'none'};
  width: 240px;
  height: 300px;
  position: absolute;
  margin: 0px auto;
  right: 40%;
  padding: 20px;
  background-color: #fff;
  border-radius: 1px;
  border: black 1px solid;
  font-family: Helvetica, Arial, sans-serif;
  z-index: 5;
`;

const Close = styled.button`
  z-index: 8;
  top: 5px;
  left: 20px;
  position: relative;
  border: none;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000003a;
  transition: opacity 0.2s ease;
`;

export default ShareModal;