import React,{Fragment} from 'react'
import MainNavMenu from "./components/main-component";
import { navbarNavigation } from "@lib/data/navigation";


const DesktopNavigationMenu = () => {
  return (
    <Fragment>
      <MainNavMenu 
    navbarNavigation={navbarNavigation}
    /></Fragment>
  )
}

export default DesktopNavigationMenu