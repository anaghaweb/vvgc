"use server";
import { google, type sheets_v4 } from "googleapis";

const ConfirmSubscription = async ({
  verificationToken,
}: {
  verificationToken: string;
}) => {
  const TokenList: { timestamp: string; token: string; email: string }[] = [];
  let tokenExists = null;
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.G_EMAIL,
      private_key: process.env.G_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({
    auth,
    version: "v4",
  });
  try {

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.G_ID,
      range: `VerificationToken!A:Z`,
    });
    const rows = response.data.values;
    console.log("rows",rows)

    if (!rows) {
      return {Success:false, message:"Verification Link has expired. Please enter your email id again"};
    }

    rows.map((e: string[], i: number) => {
      if (i !== 0) {
        TokenList.push({ timestamp: e[0], token: e[1], email: e[2] });
      }
    });
    console.log("tokenlist",TokenList)
    tokenExists = TokenList.find(
      (ele) => ele.token === verificationToken
    );

    if (tokenExists) {
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.G_ID,
        range: "subscribe!A1:A",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[tokenExists.email]],
        },
      });   

      return {Success:true, message:"subscribed"};
    } 
    else{
      return {Success:false, message:"The link has expired"}
    }     
     
  } catch (err) {
    if (typeof err === "string") {
      console.log(err);
    }   
    return {Success:false, message:"Something went wrong"};
  }
   finally{
      await deleteUsedToken({ token: tokenExists?.token, sheets });
    }
};



const deleteUsedToken = async ({
  token,
  sheets,
}: {
  token: string | undefined;
  sheets: sheets_v4.Sheets;
}) => {
  const completeSpreadsheet = await sheets.spreadsheets.get({
    spreadsheetId: process.env.G_ID,
  });

  const verificationTokenSheetId = completeSpreadsheet.data.sheets?.find(
    (sheet) => sheet.properties?.title === "VerificationToken"
  );
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.G_ID,
    range: "VerificationToken!A1:C",
  });
  const rows = response.data.values;
  const tokenIndex = rows?.findIndex((row) => row[1] === token);
  
  if (tokenIndex !== -1 && tokenIndex !== undefined) {
    const requests = [{
      deleteDimension: {
        range: {
          sheetId: verificationTokenSheetId?.properties?.sheetId, // You need the sheetId, not the name
          dimension: "ROWS",
          startIndex: tokenIndex, // Row to delete (0-indexed, includes header)
          endIndex: tokenIndex+1, // Delete only 1 row at a time
        },
      },
    }]
   const result =  await sheets.spreadsheets.batchUpdate({
      spreadsheetId: process.env.G_ID,
      requestBody: {
        requests,
      },
  }) 
  
  } 
};

export default ConfirmSubscription;