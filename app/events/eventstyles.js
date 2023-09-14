'use client'
import styled from 'styled-components';
import Link from 'next/link';

export const Zoomlink = styled.section`
display: flex;
flex-direction: column;
justify-contents: center;
margin: 1.25rem 0 1.25rem 0;
width: 100%;
height: auto;
@media(min-width: 768px){
    width: 560px;
}
& span {
    font-weight: 500;
    color: #BF4F74;
    text-decoration: underline;

}
& p {
    font-family: var(--font-opensans);
    font-weight: 400;
    }
`;

export const StyledLink = styled(Link)`
  color: #BF4F74;
  font-weight: bold;
  display: flex;
  justify-contents: center;
  margin: auto;
  width: auto;
  
  & span {
    padding: 0 4px 0 4px;
  }
  
  & div {
    padding: 0 4px 0 4px;
  }

`;

export const Heading01 = styled.h1`
    padding: 0.5rem 0.25rem 0.5rem 0.25rem;
    font-family: var(--font-cormorant);
    font-size: 2rem;
    color: rgb(69, 10, 10);
    line-height: 1.75rem;

    @media(min-width: 768px)
    {
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-weight: 600;
    }
`;