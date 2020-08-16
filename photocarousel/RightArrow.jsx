import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RightArrow = ({addCount}) => (
  // error: photoCount is read only??
  <ArrowWrapper>
    <Arrow onClick={addCount}>
      &gt;
    </Arrow>
  </ArrowWrapper>
  <ArrowWrapper onClick={MinusCount}>
      &lt;
  </ArrowWrapper>

)
const ArrowWrapper = styled.div`
  display: flex; /* or inline-flex */
  justify-content: space-between;
`;

const Arrow = styled.button`
  border-radius: 50%
  border: 1px solid  #C5C5C5;
  font-size: 16px;
  background-color: white;
`;

  export default RightArrow;