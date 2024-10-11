import { google } from "googleapis";

const getSheetfromGoogleAPI = async()=>{
    const auth = new google.auth.GoogleAuth({
        credentials:{
            client_email:process.env.G_EMAIL,
            private_key:process.env.G_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes:[
            "https://www.googleapis.com/auth/spreadsheets",
        ]})
        const sheets = google.sheets({
            auth,
            version:"v4",
        })
        return sheets;
}

export default getSheetfromGoogleAPI