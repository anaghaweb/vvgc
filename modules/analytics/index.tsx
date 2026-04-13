import Script from "next/script";

const gtmid = process.env.GTM_ID;
const gtm_script = `
 window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${gtmid}');
`
export default function GoogleTagManager() {
        return <>
                <Script id="gtm" async src={`https://www.googletagmanager.com/gtag/js?id=${gtmid}`} strategy="afterInteractive"/>
                <Script  strategy="afterInteractive"> 
                {gtm_script}
                </Script>
        </>
}