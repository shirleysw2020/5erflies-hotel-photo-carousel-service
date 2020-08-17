import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Star from '../photos/star.png';
import Superhost from '../photos/superhost.png';
import Heart from '../photos/heart.png';
import Share from '../photos/share.png';

const Header = ({list}) => (
  <Wrapper>
      <ThemeProvider theme={theme}>
          <TitleBlock>{list.listingTitle}</TitleBlock>
          <InfoData>
            <Logo src={Star}/>
            <RatingSpan>{list.rating}</RatingSpan>
            <SubColor>({list.numOfReviews})</SubColor>
            <Dot><span> • </span></Dot>
            <Logo host src={Superhost}/>
            <SubColor>{list.superHost.toString() ? (<span>Superhost</span>) : 'null'}</SubColor>
            <Dot><span> • </span></Dot>
            <Underline location>{list.location}</Underline>
          </InfoData>
          <Socialmedia>
            <ShareButton>
              <Logo share src={Heart}/>
              <Underline dark>Share</Underline>
            </ShareButton>
            <ShareButton>
              <Logo share src={Share}/>
              <Underline dark>Save</Underline>
            </ShareButton>
          </Socialmedia>
      </ThemeProvider>
  </Wrapper>
)


const theme = {
  titleColor: '#000',
  subColor: '#6e6d6d',
  padding: '4em'
}

const Wrapper = styled.div`
  /* margin-top: 40px */
  margin-bottom: 20px;
`;

const InfoData = styled.div`
  display: inline-block;
  font-size: 14px;
  padding-top: 15px;
  color: ${props => props.theme.color};
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
`;

const Socialmedia = styled.div`
  display: inline-block;
  float: right;
  margin-top: 13px;
`;

const PaddingInner = styled.div`
  padding-right: 0.25rem;
`;

const TitleBlock = styled.section`
  width: 100%;
  margin: 0 auto;
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
  padding: 0em 0.35em;
  float: right;
  cursor: pointer;
  margin-top: ${props => props.location ? '3px' : 'none'};
`;

const Dot = styled.span`
  padding: 0em 0.50em;
  color: ${props => props.theme.subColor};
`
const Logo = styled.img`
  width: ${props => props.host ? '10px' : '17px'};
  height: ${props => props.host ? '16px' : 'none'};
  padding-right: 7px;
  float: ${props => props.share ? 'right' : 'none'};
  cursor: pointer;
`;

const ShareButton = styled.button`
  float: right;
  border: none;
  background-color: white;
  padding: 5px 6px;
  cursor: pointer;
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