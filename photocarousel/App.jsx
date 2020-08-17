import React, { useState, useEffect } from 'react';
import styled ,{ keyframes } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Modal from './Modal.jsx';

const App = () => {
  const [listing, setListing] = useState([]);
  const [clickedPhotoIdx, setClickedPhoto] = useState(1)
  const [showModal, setShowModal] = useState(null);
  const openModal = (index) => {
    if (typeof index === 'number') {
      setClickedPhoto(index);
    }
    setShowModal(true);
  }
  const closeModal = () => setShowModal(false);
  // console.log('clientb', listing);

  useEffect(() => { // a hooks version of componentDidMount
    const queryID = window.location.search;
    // console.log('logged: window.location (url parameter) = ?id=10', queryID)
    const url = '/listing' + '/' + queryID;
    axios.get(url)
    .then((res) => {
      setListing(res.data);
    })
    .catch((err) => {
      console.log('client: failed getting db', err);
    })
  }, []);


  if (listing.length == 0) {return null;}
  return (
    <AppWrapper>
      <MainWrapper show={showModal}>
        <Header list={listing[0]}/>
        <Gallery
          list={listing[0]}
          openModal={openModal}
          closeModal={closeModal}
          show={showModal}
        />
      </MainWrapper>
      <Slider show={showModal}>
        <Modal
          list={listing[0]}
          closeModal={closeModal}
          clickedPhotoIdx={clickedPhotoIdx}
        />
      </Slider>
    </AppWrapper>
  )
}

const theme = {
  background: '#aaa',
  color: '#24292e'
};

const AppWrapper = styled.div`
  position: relative;
`;

const MainWrapper = styled.div`
  width: 60% ;
  margin: 0 auto;
  margin-top: ${props => props.show ? '0px' : '40px'};
  font-family: sans-serif, Roboto;
  opacity: ${props => props.show ? 0 : 1};
`;

const slideup = keyframes`
  0% {
    /* position relative to itself */
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-450px);
    opacity: 1;
  }
`;

const slidedown = keyframes`
  0% {
    /* if position of itself is fixed, then relative to window, if absolute, then relative to itself */
    transform: translateY(-450px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
`;

const Slider = styled.div`
/* null to prevent a slidedown / slide up without clicking button */
  animation: ${props => props.show === null ? 'none' : props.show ? slideup : slidedown};
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: inline-block;
  position: absolute; //for overlap the gallery
  top: 450px;
`;


export default App;

// if (show === true) {
//   return (
//     <SlideModal>
//     <Modal
//       list={listing[0]}
//       closeModal={closeModal}
//       show={show}
//     />
//     </SlideModal>
//   )
// }