import React from 'react'
import { google } from 'googleapis';
import type { Metadata } from 'next';
import ConfirmSubscription from '@modules/test/server-actions/confirmSubscription';
export const metadata:Metadata = {
    title:  "Verify Email | VVGC",
    description: "Verify your email address by clicking the link and to become a subscriber for our weekly news letter"
}

const page = async ({params}:{params:{token:string}}) => {
    const verificationToken = params.token;
    const response = await ConfirmSubscription({verificationToken});
  return (
    response ?
    <div>Sucess</div>
    :
    <div>Token Expired</div>
  )
}

export default page