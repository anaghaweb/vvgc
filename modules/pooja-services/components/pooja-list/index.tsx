import React,{Fragment} from 'react'

const PoojaList = () => {

  return (
    <Fragment>
         <section className="block max-w-full relative h-[1300px] p-5 overflow-x-auto overflow-y-hidden">
                    <iframe src={process.env.POOJALIST_URL} className="w-[750px] md:m-auto h-[1300px]"></iframe>
                </section>
    </Fragment>
  )
}

export default PoojaList