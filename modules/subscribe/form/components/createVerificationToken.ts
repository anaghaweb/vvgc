'use server'
import { sheets_v4 } from "googleapis";
const crypto = require ("crypto");

export async function CreateVerificationToken({userInputEmailId, sheets}:{userInputEmailId:string, sheets: sheets_v4.Sheets}):Promise<string | null>{

    const token = crypto.randomBytes(32).toString('hex');
    const expiration = new Date(Date.now()).getTime() + 86400;  
    
    const vToken = await sheets.spreadsheets.values.append({
        spreadsheetId : process.env.G_ID,
        range: 'VerificationToken!A1:C1',
       valueInputOption:'USER_ENTERED',
       requestBody:{
           values:[
               [expiration, token, userInputEmailId]
           ]
         }
    })
    if(!vToken){
        return null;
    }
    console.log("Added New token to sheets", expiration, token, userInputEmailId)
    return token;   
}