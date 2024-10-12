import { sheets_v4 } from "googleapis";

const DeleteExpiredToken=async({sheets}:{sheets: sheets_v4.Sheets})=>{

    const currentTime = new Date(Date.now()).getTime();
    const expiredIndices : number[] = [];
    const completeSpreadsheet = await sheets.spreadsheets.get({
        spreadsheetId:process.env.G_ID
    })

    const verificationTokenSheetId = completeSpreadsheet.data.sheets?.find(sheet => sheet.properties?.title === "VerificationToken");
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId:process.env.G_ID,
        range:"VerificationToken!A1:C"
    })
    const rows = response.data.values;
  

   rows?.forEach((row, index)=>{
    const expiredTime =  row[0];
    if(expiredTime < currentTime){
        expiredIndices.push(index+2);
    }
   })

   if(expiredIndices.length>0){
    const requests = expiredIndices.map(index=>({
        deleteDimension: {
            range: {
                sheetId: verificationTokenSheetId?.properties?.sheetId, // You need the sheetId, not the name
              dimension: "ROWS",
              startIndex: index, // Row to delete (0-indexed, includes header)
              endIndex: index + 1, // Delete only 1 row at a time
            }
          },          
    }))
         await sheets.spreadsheets.batchUpdate({
            spreadsheetId: process.env.G_ID,
            requestBody: {
              requests,
            },
        }) 
    
}

}
export default DeleteExpiredToken