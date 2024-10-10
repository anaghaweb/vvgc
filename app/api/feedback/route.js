import {NextResponse} from 'next/server';
import { google } from "googleapis";

export async function POST(request){    
    let payload = await request.json();
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
             range: 'feedback!A1:B1',
            valueInputOption:'USER_ENTERED',
            requestBody:{
                values:[
                    [ payload.email, payload.message]
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

