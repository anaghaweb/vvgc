import React from "react";
import MainNavMenu from "./components/main-component";
import { navbarNavigation } from "@lib/data/navigation";

const DesktopNavigationMenu = () => {
  return <MainNavMenu navbarNavigation={navbarNavigation} />;
};

export default DesktopNavigationMenu;
