import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import App from './App.jsx';

const Gallery = ({list}) => (
  <Wrapper>
    <BigGrid><Imgagery src={list.photos[0]}/></BigGrid>
    {list.photos.slice(1, 5).map((photo, index) => {
      // add bottom-padding component only first 2 pics
      return (index <= 1)
      ? <Grid primary><Imgagery src={photo}/></Grid>
      : <Grid><Imgagery src={photo}/></Grid>
    })}
  </Wrapper>
)

const Imgagery = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1120px;
  /* display: flex; */
  width: 100%;
  height: 100%;
  height: 380px;
  border: 5px solid #fff;
  border-radius: 15px;
  background: white;
`;

// const Border = styled.
const BigGrid = styled.div`
  display: flex;
  flex-direction: row;
  float: left;
  display: inline-block;
  padding-right: 1%;
  width: 49%;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  float: left;
  padding-right: 1%;
  display: inline-block;
  height: 181px;
  width: 24%;
  padding-bottom: ${props => props.primary ? '0.5%' : 'none'};
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