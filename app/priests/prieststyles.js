'use client'
import styled from 'styled-components';
import { Content_Wrapper } from '../GlobalStyles/globalstyles';

export const Gofundme_Wrapper = styled(Content_Wrapper)`

h2{
   padding: 1rem 2rem;
   font-size: 1.25rem;
   color: #010048;
   font-family: var(--font-opensans);
   width: 80%;
   @media(max-width: 768px){width: 100%; font-size: 0.75rem; padding: 0.75rem 0.5rem}
}

h3{
   padding: 1em 2rem;
   font-size: 1.25rem;
   color: #38761d;
   font-family: var(--font-opensans);
   width: 80%;
   @media(max-width: 768px){width: 100%; font-size: 0.75rem; padding: 0.75rem 0.5rem}
}
 div{
   padding: 1em 2rem;
   font-size: 1.25rem;
   font-family: var(--font-opensans);
   width: 80%;
   @media(max-width: 768px){width: 100%; font-size: 0.75rem; padding: 0.75rem 0.5rem}
 }
`;

export const Container = styled.section`
 width: 100%;
 height: auto;
 margin: 0 auto 0 auto;
 background-color: #eeeeee;
`;

export const Grid_Container = styled.section`
margin: auto;
width: 80%;
display: grid;
grid-template-columns: repeat(4, 1fr);
color: green;
gap: 2rem;
padding: 1rem;
justify-items: center;

@media(max-width : 768px){
  grid-template-columns: 1fr;
  width: 100%;
  padding: 0.5rem;
  gap: 1rem;
}
`;

export const Inner_div = styled.div`
  width: 300px;  
  padding: 1rem;
  grid-column: span 2;
  background-color: #fff;
  height: 350px;
  display: flex;
  flex-direction: column;

  @media (min-width: 450px){
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  }

  @media(max-width: 768px){
    grid-column: span 1;
    width: 100%;
    padding: 0.5rem;
    height: auto;
  }
  `