'use server'
import { google } from "googleapis";

const GetGoogleAccessToken = async () => {
    const OAuth2 = google.auth.OAuth2;
    // Fill in the values noted from Step 2
    const oAuth2Client = new OAuth2(
      process.env.OAUTH2_CLIENT_ID,
      process.env.OAUTH2_CLIENT_SECRET,
      process.env.BASE_URL       
    );
    oAuth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN, // Replace with your stored refresh token
    });
    try {
      const { token } = await oAuth2Client.getAccessToken();      
      return token;
    } catch (error) {
      console.error('Error refreshing access token:', error);
    }
  };
  //ACCESS TOKEN TO BE SENT ALONG WITH YOUR REQUESTS TO GOOGLE API
  export default GetGoogleAccessToken;