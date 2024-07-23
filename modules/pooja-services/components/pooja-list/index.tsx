import React,{Fragment} from 'react'

const PoojaList = () => {
    const iframeURL = "https://docs.google.com/document/d/e/2PACX-1vRI8sKKzJyvmKWd7my0oH1yju-9ZpLDBm8IgbRcfvpEUa_bpyYjTLUYZtM5mQoR1Q/pub?embedded=true";
  return (
    <Fragment>
         <section className="block max-w-full relative h-[1300px] p-5 overflow-x-auto overflow-y-hidden">
                    <iframe src={iframeURL} className="w-[700px] md:m-auto h-[1300px]"></iframe>
                </section>
    </Fragment>
  )
}

export default PoojaList