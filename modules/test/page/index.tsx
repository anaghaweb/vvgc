import React,{Fragment} from 'react'
import type { Campaign } from 'types/global';


const TestPage = ({camid, campaign}:{
  camid?:string;
  campaign?:Campaign[]
}) => {
  return (
    <div className="h-[75vh] flex justify-start items-center">
      Next Update Pending... {campaign?.map((ele,index)=>(
        <li key={index}>{ele.title}</li>
      ))}
    </div >
  )
}

export default TestPage