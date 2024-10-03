import React,{Fragment} from 'react'
import CustomPrasadamForm from '../components/custom-prasadam-form'
import KitchenCampaignFlyer from '../components/kitchen-campaign'
import PrasadamList from '../components/prasadam-list'

const PrasadamServicesPageView = () => {
  return (
    <Fragment>
        <KitchenCampaignFlyer />
        <CustomPrasadamForm />
        <PrasadamList />
    </Fragment>
  ) 
}

export default PrasadamServicesPageView