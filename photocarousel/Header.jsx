import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Star from '../photos/star.png';
import Superhost from '../photos/superhost.png';


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
            <SubColor>{list.superHost.toString() ? (<span>Superhost</span> ): null}</SubColor>
            <Dot><span> • </span></Dot>
            <Underline>{list.location}</Underline>
          </InfoData>
      </ThemeProvider>
  </Wrapper>
)

const theme = {
  titleColor: '#000',
  subColor: '#6e6d6d',
  padding: '4em'
}

const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;
`;

const InfoData = styled.div`
  display: flex;
  font-size: 14px;
  padding-top: 15px;
  color: ${props => props.theme.color};
  font-family: Roboto;
`;

const PaddingInner = styled.div`
  padding-right: 0.25rem;
`;

const TitleBlock = styled.section`
  width: 100%;
  margin: 0 auto;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  color: ${props => props.theme.titleColor};
  font-size: 1.5em;
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
  color: ${props => props.theme.subColor};
  padding: 0em 0.35em;
`;

const Dot = styled.span`
  padding: 0em 0.50em;
  color: ${props => props.theme.subColor};
`
const Logo = styled.img`
  width: ${props => props.host ? '16px' : '17px'};
  height: ${props => props.host ? '16px' : 'none'};
  padding-bottom: 20px;
  padding-right: 2px;
`;

export default Header;