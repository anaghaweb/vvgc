'use client'
import result from '@/json/regularevents.json'
import { Cormorant } from 'next/font/google'
import styled from 'styled-components'
import React from 'react';

const cormorant = Cormorant({subsets: ['latin'], variable:'--font-cormorant', fallback: 'sans'})

export default function regular() {

    
      return (
        <div className ={cormorant.variable} >
              <Heading01 >Regular Events</Heading01>
            {
                result.content.map((data, index) => {
                    
                    return(  
                     <React.Fragment key={index}>                  
                    <Event_Section>
                        <Weekday>{data.day}</Weekday>
                         
                        <DailyTime>{data.time}:</DailyTime>
                            <DailyEvent>{data.event}</DailyEvent>
                            
                    <DailyTime>{data.time1}:</DailyTime><DailyEvent>{data.event1}</DailyEvent>
                            
                            {data.time2 && <> <DailyTime>{data.time2}:</DailyTime>
                                <DailyEvent>{data.event2}</DailyEvent></>}
                            
                        {data.time3 &&  <><DailyTime>{data.time3}:</DailyTime><DailyEvent>{data.event3}</DailyEvent></>}
                            
                        {data.time4  && <><DailyTime>{data.time4}:</DailyTime><DailyEvent>{data.event4}</DailyEvent></>}
                            
                        {data.time5  && <><DailyTime>{data.time5}:</DailyTime><DailyEvent>{data.event5}</DailyEvent></>}
                    <hr/>        
                    </Event_Section>
                    </React.Fragment>
                    )
                    
                 })
             
             }
        </div>)
    
};

//className="grid grid-cols-6 gap-x-1 gap-y-3 my-5"
const Weekday = styled.div`
padding: 0.5rem;
text-align: start;
grid-column: 1 / -1;
font-size: 1.5rem/* 18px */;
font-weight: 500;
line-height: 1.75rem/* 28px */;
font-family: var(--font-cormorant );
 color: #BF4F74;
`

const Event_Section = styled.section`
display: grid;
padding-left:0.5rem;
grid-template-columns: repeat(6, minmax(0, 1fr));
column-gap: 0.25rem;
row-gap: 0.75rem;
margin-top: 1.25rem;
margin-bottom: 1.25rem;
`

const Heading01 = styled.h1`
    padding: 0.5rem 0.25rem 0.5rem 0.25rem;
    font-family: var(--font-cormorant);
    font-size: 2rem;
    color: #BF4F74;
    line-height: 1.75rem;

    @media(min-width: 768px)
    {
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-weight: 600;
    }
`;


const DailyEvent = styled.div`
    grid-column: span 5 / span 5;
    padding: 0 0.25rem 0 0.25rem;
    font-size: 12ps;
    width: 100%;
    text-align: start;
    
    @media(min-width: 768px){
        font-size: 1rem;
        line-height: 1.5rem;
    }
`;

const DailyTime = styled.div`
grid-column: span 1 / span 1;
border-right-width: 1px;
font-size: 12px;
color: #BF4F74;
font-family: var(--font-opensans);
padding: 0 4px 0 4px;
display: flex;
align-items: center;
justify-content: flex-end;

@media (min-width: 768px){
    font-size: 1rem;
    line-height: 1.5rem;
}
`;
