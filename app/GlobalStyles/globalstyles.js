'use client'
import styled from 'styled-components';

export const Hero_Image_Wrapper = styled.section`
display: flex; 
justify-content: center; 
align-items: center; 
width: 100%; 
height: 24rem; 
font-size: 1.875rem;
line-height: 2.25rem; 
color: #ffffff; 

background-image: url('${props => props.$bgimg}') ;
background-position: center; 
background-repeat: no-repeat; 
background-size: cover; 
margin: 0.1px;



@media (min-width: 768px) { 
  font-size: 4.5rem;
  font-weight: 600;
line-height: 1; 
height: 70vh;
 }

 & div{
  width: 100%; 
height: auto; 
text-align: center; 
font-family: var(--font-cormorant);
 }

 

`


export const HorizontalBox = styled.section`

display: grid; 
position: relative; 
padding: 1.25rem; 
margin-top: 1.25rem;
margin-bottom: 1.25rem; 
grid-template-columns: repeat(1, minmax(0, 1fr)); 
max-width: 100%; 
height: auto; 
background-color: #ffffff; 
margin-left: auto;
margin-right: auto;
@media (min-width: 768px) { 
  grid-template-columns: repeat(4, minmax(0, 1fr)); 
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
 }
@media (min-width: 1024px) { 
  width: 90%;
 }

 & h1{
    padding-top: 1.25rem;
padding-bottom: 1.25rem; 
font-size: 1.875rem;
line-height: 2.25rem; 
font-weight: 600; 
font-family: var(--font-cormorant);
 }
`
export const HBox_Text_Div = styled.div`
display: flex; 
flex-direction: column; 
grid-column: ${(props) => (props.$maxwidth === 'full' ? '1 / -1' : 'span 1 / span 1')} ; 
justify-items: center;
align-items: center;  
width: 100%; 
max-width: 100%; 
height: auto; 
text-align: center; 
font-Family: var(--font-opensans);
padding: 1.5rem;
grid-column: span 2 / span 2; 
& div{
padding: 1.25rem 1rem 1.25rem 1rem; 
text-align: center; 
font-weight: 400;
}

@media (min-width: 768px) { 
  &[maxwidth === "full]{
    grid-column: 1 / -1;
  }
  
 }
`
export const HBox_Image_Div = styled.div`
position: relative; 
grid-column: span 1 / span 1; 
width: 100%; 
max-width: 100%; 
height: auto; 

@media (min-width: 768px) { 
  grid-column: span 2 / span 2; 
 }
 }
`
export const H1_Wrapper = styled.div`
  color: ${(props) => (props.$setcolor || 'black')};
  padding: 1.25rem 0.5rem 1.25rem 0.5rem; 
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  font-size: 2.5rem;
  line-height: 2.25rem;
  font-weight: 600;
  font-family: var(--font-cormorant);
  text-align: center;

  @media (max-wdith: 768px){
      font-size: 1.5rem;
      line-height: 1.25rem;
      padding: 1.5rem;
  }
`;

export const Content_Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items:center;
  text-align: center;
  background-color: ${props => props.$setcolor || '#ffffff'};

  `
