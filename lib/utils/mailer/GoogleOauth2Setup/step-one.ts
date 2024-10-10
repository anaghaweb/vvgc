import { google } from "googleapis";

 function createOauth2Credentials(){
    const OAuth2 = google.auth.OAuth2;
    // Fill in the values noted from Step 2
    const oAuth2Client = new OAuth2(
      process.env.OAUTH2_CLIENT_ID,
      process.env.OAUTH2_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground' 
      
    );
    
   //Generate a URL for consent to access the Gmail API
    //STEP ONE//
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://mail.google.com/'], 
      prompt:'consent'
      // This scope allows sending email
    });
    
     console.log("Open this URL to get authorization code and pass it to getToken function",authUrl);

    //STEP TWO//
    const getToken = async (code: string) => {
      try {
        const { tokens } = await oAuth2Client.getToken(code);
        console.log('Access Token:', tokens.access_token);
        console.log('Refresh Token:', tokens.refresh_token); 
        // Save the refresh token to your environment or a secure place
      } catch (error) {
        console.error('Error retrieving access token:', error);
      }
    };

  // Save tokens to your environment or a secure storage

 getToken('4/0AVG7fiRSnildWCpN-d7uAEf61jQe2nNH_aSJDUkOZYTNZagGvc6TjglviTe7QonBZbrStA'); // After visiting the URL and authorizing, replace 'YOUR_AUTHORIZATION_CODE' with the code from the URL.
 }

createOauth2Credentials();
