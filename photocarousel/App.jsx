import React, { useState, useEffect } from 'react';
import styled ,{ keyframes } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Modal from './Modal.jsx';

// refactored class component to use hooks
const App = (props) => {
  // set state name and initial state
  const [listing, setListing] = useState([]);
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  // console.log('clientb', listing);

  useEffect(() => { // a hooks thing... similar to componentDidMount
    const queryID = window.location.search;
    // console.log('logged: window.location (url parameter) = ?id=10', queryID)
    const url = '/listing' + '/' + queryID;
    axios.get(url)
    .then((res) => {
      // console.log('client:succes geting db', res.data);
      setListing(res.data);
    })
    .catch((err) => {
      console.log('client: failed getting db', err);
    })
  }, []);

  if (listing.length == 0) {return null;}
  if (show === true) {
    return (
      <SlideModal>
      <Modal
        list={listing[0]}
        closeModal={closeModal}
        show={show}
      />
      </SlideModal>
    )
  }
  return (
      <MainWrapper>
        <Header list={listing[0]}/>
        <Gallery
          list={listing[0]}
          openModal={openModal}
          closeModal={closeModal}
          show={show}
        />
      </MainWrapper>
  )
}

const theme = {
  background: '#aaa',
  color: '#24292e'
};

const MainWrapper = styled.div`
  width: 60% ;
  margin: 0 auto;
  font-family: sans-serif, Roboto;
`;

const SlideModal = styled.div`
  /* transform: translateY(0%); */
  width: 100vw;
  height: 100vh;
  z-index: 1;
  position: absolute;
  animation: SlideUp 1s ease;
`;

const SlideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;


// .red-packet-index-pop{
//   animation: fromSky 1s ease-out;
//   animation-fill-mode: forwards;
//   top: -400px;
// }
// @keyframes fromSky {
//   0% {
//     top: -400px;
//   }
//   100% {
//     top: 0;
//   }


export default App;
