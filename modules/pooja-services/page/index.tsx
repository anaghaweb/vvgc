import React, { Fragment } from "react";
import PoojaForm from "../components/pooja-form";
import TempleContact from "../components/temple-contact";
import PoojaList from "../components/pooja-list";

const PoojaServicePage = () => {
  return (
    <Fragment>
      <PoojaForm />
      <TempleContact />
      <PoojaList />
    </Fragment>
  );
};
export default PoojaServicePage;
