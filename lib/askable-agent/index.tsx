'use client'
import Script from 'next/script'
import React from 'react'

const AskableAgentScript = () => {
  return (
    <div>
         <Script
                  src={`https://askable.gentic.in/versions/v0.1.4/askable-ws.js?v=0.1.4`}
                  data-site-id="vvgc-org"
                  data-widget-type="ws"
                  data-api-base-url={'https://askable.gentic.in'}
                  strategy="afterInteractive"
                  onLoad={()=>console.log("Loaded askable Chatbot Successfully")}
                />
    </div>
  )
}

export default AskableAgentScript