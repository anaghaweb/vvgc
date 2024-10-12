import React from 'react'
import type { Metadata } from 'next';
import ConfirmSubscription from '@modules/subscribe/form/components/confirmSubscription';
import VerifyEmailPageView from '@modules/verifyEmail';
import getSheetfromGoogleAPI from '@lib/utils/googleSheetApiHandler';
import DeleteExpiredToken from '@modules/subscribe/form/components/deleteExpiredToken';

export const metadata:Metadata = {
    title:  "Verify Email | VVGC",
    description: "Verify your email address by clicking the link and to become a subscriber for our weekly news letter"
}

const page = async ({params}:{params:{token:string}}) => {
    const verificationToken = params.token;
    // const sheets = await getSheetfromGoogleAPI();
    // await DeleteExpiredToken({sheets});
    const response = await ConfirmSubscription({verificationToken});
    
    
  return (
    <VerifyEmailPageView response={response}/>
  )
}

export default page