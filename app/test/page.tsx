import { Fragment } from "react";
import TestPage from "@modules/test/page";

const Test = async ({
  searchParams,
}: {

  searchParams: {
    evtype: "regular" | "special" | "weekly" | "festival";
  };
}) => {


  return (
    <Fragment>
      <TestPage />

    </Fragment>
  );
};

export default Test;
