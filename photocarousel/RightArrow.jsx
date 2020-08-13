import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RightArrow = ({addCount}) => (
  // error: photoCount is read only??
  <div>
    <Arrow onClick={addCount}>
      >
    </Arrow>
  </div>

  // const LeftArrow = () => (
  //   <Arrow onClick={MinusCount}>
  //     Hi
  //   </Arrow>
  // )
)

const Arrow = styled.button`
  border-radius: 50%
  border: 1px solid  #C5C5C5;
  font-size: 16px;
  background-color: white;
`;

  export default RightArrow;