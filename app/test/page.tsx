import { Fragment } from "react";
import TestPage from "@modules/test/page";

const Test = async ({
  params,
  searchParams,
}: {
  params: {
    camid: string;
  };
  searchParams: {
    evtype: "regular" | "special" | "weekly" | "festival";
  };
}) => {
 

  return (
    <Fragment>
      <TestPage 
     
        />
     
    </Fragment>
  );
};

export default Test;
