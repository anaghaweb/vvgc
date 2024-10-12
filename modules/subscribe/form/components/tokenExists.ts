import type { sheets_v4 } from "googleapis";

const verificationTokenExists= async({userInputEmailId, sheets}:{userInputEmailId: string,sheets:sheets_v4.Sheets })=>{
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId:process.env.G_ID,
        range:"VerificationToken!A1:C"
    });
    const rows = response.data.values;
    const result = rows?.find(row=>row[2] === userInputEmailId);
    console.log("Active token exists", result);
    if(result){
        return{Success:true, message:"We have already sent you a verification link. Please check your email"}
    }
    return {Success:false, message:"createNewToken"};
}

export default verificationTokenExists;