import {NextResponse} from 'next/server';
import { google } from "googleapis";

export async function POST(request){    
    let payload = await request.json();
    //query google sheets to check if email id already exists.

    //Call function to check for valid email input by sending a confirmation link to email
    
    //if unsuccessful send a response to the user.
    
    //if successful execute below code which adds the emailid to google sheet named subscribe
    try{      
        const auth = new google.auth.GoogleAuth({
            credentials:{
                client_email :process.env.G_EMAIL,
             private_key:process.env.G_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });
        const sheets = google.sheets({
            auth,
            version:'v4',
        })
        const response = await sheets.spreadsheets.values.append({
             spreadsheetId : process.env.G_ID,
             range: 'subscribe!A:A',
            valueInputOption:'USER_ENTERED',
            requestBody:{
                values:[
                    [ payload.email]
                ]
              }
        });
        return NextResponse.json(
           { data:response.data}
        )
    }
    catch(error){
        console.error(error);
        return NextResponse.json({message:  'something went wrong'})}
}

