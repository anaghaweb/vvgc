import { Fragment } from "react";
import Events from "../components/events"; 
import MahaRudraYagnamSummaryLink from "@modules/home/components/section-1/maha-rudra-yagnam-2026/components/summary-link";
import CalenderWithTimeZone from "../calendar";
const TestPage = async () => {
    const response = false;
  return (
    <Fragment>
      {/* <Events /> */}
      <MahaRudraYagnamSummaryLink />
      <CalenderWithTimeZone />
    </Fragment>
  );
};

export default TestPage;
