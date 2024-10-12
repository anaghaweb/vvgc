import GetGoogleAccessToken from "./GoogleOauth2Setup/step-two"
import nodemailer from 'nodemailer';

const SendMail = async({userEmail, html_body_content}:{userEmail:string, html_body_content:string})=>{
    const accessToken = await GetGoogleAccessToken();
    const transporter = createTransporter({accessToken});

    const mailOptions = {
        from: process.env.GMAIL_ACCOUNT_NAME,
        to: userEmail,
        subject: 'VVGC Verification Link',
        text: 'VVGC Verification Link',
        html: html_body_content,
      };
      try{
        const result = await transporter.sendMail(mailOptions);
        console.log(result.response);
        return result.response;
      }
      catch(error){
        console.log(error)
        return null
      }          
}

const createTransporter = ({accessToken}:{accessToken:string | null | undefined})=>{
    const transporter = nodemailer.createTransport({
         service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.GMAIL_ACCOUNT_NAME, // Your Gmail account
          clientId: process.env.OAUTH2_CLIENT_ID,
          clientSecret: process.env.OAUTH2_CLIENT_SECRET,
          refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
          accessToken: accessToken, // Access token retrieved dynamically
        },
      });    
      return transporter;
}

export default SendMail;

