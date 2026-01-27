
import nodemailer from 'nodemailer';

const SendMail = async({userEmail, html_body_content, accessToken}:{userEmail:string, html_body_content:string, accessToken:string})=>{
    
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
        return result.response;
      }
      catch(error){
        console.info(error)
        return null
      }          
}

const createTransporter = ({accessToken}:{accessToken:string})=>{
    const transporter = nodemailer.createTransport({
         service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.GMAIL_ACCOUNT_NAME, // Your Gmail account
          clientId: process.env.OAUTH2_CLIENT_ID,
          clientSecret: process.env.OAUTH2_CLIENT_SECRET,
          refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
          //accessToken: accessToken, // Access token retrieved dynamically
        },
      });    
      return transporter;
}

export default SendMail;

