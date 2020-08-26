// import React from 'react';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
// import ShareModal from './ShareModal.jsx';

const Header = ({list}) => {
  // const [shareModalOpen, setShareModalOpen] = useState(false);
  const [heartClick, setHeartClick] = useState(false);
  const setHeart = () => {
    setHeartClick(!heartClick);
  }
  // const forShareModalOpen = () => {
  //   console.log('close me!')
  //   setShareModalOpen(!shareModalOpen);
  // }

  return (
  <Wrapper>
    <ThemeProvider theme={theme}>
      <TitleBlock>{list.listingTitle}</TitleBlock>
      <InfoData>
        <Logo src="https://5erflies.s3-us-west-1.amazonaws.com/icons/star.png"/>
        <RatingSpan>{list.rating}</RatingSpan>
        <SubColor>({list.numOfReviews})</SubColor>
        <Dot><span> • </span></Dot>
        {list.superHost === true ? <span><Logo host src="https://5erflies.s3-us-west-1.amazonaws.com/icons/superhost.png"/><SubColor>Superhost<Dot> • </Dot></SubColor></span> : null}
        <Underline location>{list.location}</Underline>
      </InfoData>
      <Socialmedia>
        <ShareButton>
          <Underline dark>Save</Underline>
          {heartClick
          ? (<Heart onClick={setHeart} heartClick>
            <svg style={{ height: 18, width: 18 }} aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" /></svg>
          </Heart>)
          : (<Heart onClick={setHeart}><svg style={{ height: 18, width: 18 }} aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" /></svg>
          </Heart>
          )}
        </ShareButton>
        <ShareButton>
          <Underline dark>Share</Underline>
          <Logo share src="https://5erflies.s3-us-west-1.amazonaws.com/icons/share.png"/>
        </ShareButton>
      </Socialmedia>
    </ThemeProvider>
  </Wrapper>
  )
};

const Heart = styled.button`
  fill: ${props => props.heartClick ? '#f5385d' : 'white'};
  stroke: ${props => props.heartClick ? 'none' : 'black'};
  stroke-width: ${props => props.heartClick ? '0' : '2'};
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

const theme = {
  titleColor: '#000',
  subColor: '#6e6d6d',
  padding: '4em'
}

const Wrapper = styled.div`
  margin-bottom: 15px;
`;

const InfoData = styled.div`
  display: inline-block;
  font-size: 15px;
  padding-top: 20px;
  color: ${props => props.theme.color};
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
`;

const Socialmedia = styled.div`
  display: inline-block;
  float: right;
  margin-top: 20px;
`;

const PaddingInner = styled.div`
  padding-right: 0.25rem;
`;

const TitleBlock = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 15px;
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
  color: ${props => props.theme.titleColor};
  font-size: 26px;
`;

const RatingSpan = styled.span`
  color: ${props => props.theme.titleColor};
  padding: 0em 0.15em;
`;

const SubColor = styled.span`
  color: ${props => props.theme.subColor};
  padding: 0em 0.15em;
`;

const Underline = styled.span`
  text-decoration: underline;
  color: ${props => props.dark ? 'black' : props.theme.subColor};
  padding: 0.2em 0.35em;
  float: right;
  cursor: pointer;
`;

const Dot = styled.span`
  padding: 0em 0.50em;
  color: ${props => props.theme.subColor};
`
const Logo = styled.img`
  width: ${props => props.host ? '10px' : '17px'};
  height: 16px;
  padding-right: 7px;
  padding-top: ${props => props.share ? '3px' : 'none'};
  float: ${props => props.share ? 'right' : 'none'};
  cursor: pointer;
`;

const ShareButton = styled.button`
  float: right;
  border: none;
  background-color: white;
  padding: 5px 6px;
  cursor: pointer;
  outline: none;
  &: hover {
    background-color: #f2f4f5;
    padding: 5px 6px;
    border: none;
    border-radius: 8px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
`;

export default Header;