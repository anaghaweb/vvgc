import React,{Fragment} from 'react'

const PoojaList = () => {

  return (
    <Fragment>
         <section className="block max-w-full relative h-325 p-5 overflow-x-auto overflow-y-hidden">
                    <iframe src={process.env.POOJALIST_URL} className="w-187.5 md:m-auto h-325"></iframe>
                </section>
    </Fragment>
  )
}

export default PoojaList