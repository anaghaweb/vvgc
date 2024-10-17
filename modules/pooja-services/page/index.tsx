import React, { Fragment } from "react";
import PoojaForm from "../components/pooja-form";
import TempleContact from "../components/temple-contact";
import PoojaList from "../components/pooja-list";
import PoojaServicesHeroBanner from "../components/hero-banner";
const PoojaServicePage = () => { 
  return (
    <Fragment>
      <PoojaServicesHeroBanner />
      <PoojaForm />
      <TempleContact />
      <PoojaList />
    </Fragment>
  );
};
export default PoojaServicePage;
