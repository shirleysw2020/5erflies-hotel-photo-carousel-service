import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import App from './App.jsx';

const Gallery = ({list}) => (
  <div>
    <Wrapper>
      <Imgagery src={list.photos[0]}/>
    </Wrapper>
    <Wrapper2>
      {list.photos.slice(1, 5).map((photo, index) => {
        // add bottom-padding component only first 2 pics
        return (
          <Grid primary><Imgagery src={photo} key={index}/></Grid>
        )
      })}
    </Wrapper2>
  </div>
)

const Imgagery = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1120px;
  float: left;
  width: 49.5%;
  margin-right: 0.5%;
`;

const Wrapper2 = styled.div`
  display: flex;
  width: 50%;
  flex-flow: wrap;
`;

const Grid = styled.div`
  margin-right: 1%;
  width: 49%;
  float: left;
  /* padding-bottom: ${props => props.primary ? '0.5%' : 'none'}; */
`;


export default Gallery;

// const Gallery = ({list}) => (
//   <Wrapper>
//     <BigGrid><img src={list.photos[0]} style={{width: "100%"}}/></BigGrid>
//     {/* hard-code for now - only show 5 pics */}
//     {list.photos.slice(1, 5).map((photo, index) => {
//       return (
//         <Grid>
//           {/* {console.log(typeof photo)} */}
//           <img src={photo} style={{width: "100%"}}/>
//         </Grid>
//       )
//     })}
//   </Wrapper>
// )

// if (index <= 1) {
//   return <Grid primary><Imgagery src={photo}/></Grid>
// }
// return (
//   <Grid><Imgagery src={photo}/></Grid>
// )