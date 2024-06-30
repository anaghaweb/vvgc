import React, { Fragment } from "react";

const PrasadamList = () => {
  const prasadamListURL =
    "https://docs.google.com/document/d/e/2PACX-1vQOl-51RHrgRT9dbGG6A3xVG2SRBI-QmcXNn-0LiycySp_JuNTHfdG1BHLVUl6KAFPuPMvQ5s_WF0Fz/pub?embedded=true";
  return (
    <Fragment>
      <section className="block max-w-full relative h-[3500px] p-5 overflow-x-auto overflow-y-hidden">
        <iframe
          src={prasadamListURL}
          className="w-[850px] md:m-auto h-[3500px]"
        ></iframe>
      </section>
    </Fragment>
  );
};

export default PrasadamList;
