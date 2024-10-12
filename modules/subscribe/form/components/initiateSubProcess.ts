'use server'
import { google } from "googleapis";
import { SendVerificationLink } from "./sendVerificationLink";
import EmailAlreadySubscribedCheck from "./emailAlreadySubscribedCheck";
import { CreateVerificationToken } from "./createVerificationToken";
import DeleteExpiredToken from "./deleteExpiredToken";
import verificationTokenExists from "./tokenExists";

export async function NewsLetterSubscription(
    _currentState:unknown,
    formdata:FormData
){  
    const userInputEmailId = formdata.get("email") as string;      
    let subscribedEmailList: string[] = [];

    try{
        
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

            //CLEANUP EXPIRED TOKENS
            // await DeleteExpiredToken({sheets});

            const response = await sheets.spreadsheets.values.get({
                spreadsheetId:process.env.G_ID,
                range:`subscribe!A1:A`
            })            
            const rows = response.data.values;
            if (!rows || typeof rows === 'string' || rows === null) {
                return {Success:false, message:"Something went Wrong"}; 
            }

            rows.map((e:string[],i:number)=>{
                if(i !== 0){
                    subscribedEmailList.push(e[0]);
                }
            })
    
           // Check if the email is already subscribed.    
    const isSubscribed = EmailAlreadySubscribedCheck(subscribedEmailList, userInputEmailId);  
    
    if(isSubscribed){       
        return {Success:false, message:"Email ID already exists"};
    }
    //Check if a verification link has already been sent by checking if the verification token exists

    const activeLinkExists = await verificationTokenExists({userInputEmailId, sheets});
    if(activeLinkExists.Success){
        return {Success: activeLinkExists.Success, message:activeLinkExists.message};
    }

    // Generate Token, 24 hour Timestamp and store it in gsheet along with email id
    const vtoken = await CreateVerificationToken({userInputEmailId, sheets});
    if(!vtoken){
        return {Success:false, message:"Could not send Verification Link"}
    }
    
    //Send Verification link
    let sendLinkStatus;
    if(vtoken){
        sendLinkStatus = await SendVerificationLink({token:vtoken, email:userInputEmailId })
    }
       if(sendLinkStatus){
        return {Success:true, message:"A Verification Link has been sent to your Email ID"}
       }
    
    }
    catch(err){
        if(typeof(err) === 'string')
        {console.log(err)};        
        return {Success:false, message:"Something Went Wrong"};        
    }
    
}

