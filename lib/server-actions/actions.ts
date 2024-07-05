'use server'
import { google } from 'googleapis';
import { Campaign } from 'types/global';

export async function getCampaignData(): Promise<Campaign[]> {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.G_EMAIL,
        private_key: process.env.G_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets.readonly',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.G_ID,
      range: 'campaigns!A1:L1000', // Adjust the range as needed
    });

    const rows = response.data.values;
    if(!rows) return [];
    if (rows.length) {
      const [headers, ...data] = rows;

      // Find the indices of 'description' and 'imageUrl'
      const descriptionIndex = headers.indexOf('description');
      const imageUrlIndex = headers.indexOf('imageUrl');

      return data.map((row) => {
        const campaign: Campaign = {
          id: row[0] || '',
          start: row[1] || '',
          end: row[2] || '',
          duration: row[3] || '',
          title: row[4] || '',
          subtitle: row[5] || '',
          description: row[descriptionIndex] || '',
          paragraphs: row.slice(descriptionIndex + 1, imageUrlIndex).filter((para) => para) || [],
          imageUrl: row[imageUrlIndex] || '',
          sponsor_link: row[imageUrlIndex + 1] || '',
          register_link: row[imageUrlIndex + 2] || '',
        };

        return campaign;
      });
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong');
  }
}

{/**
    const headers = data[0];
    const body = data.slice(1);
  
    
    const result = [];
    

    body.map((r) =>{ 
            const newobj = {};
            for(let i=0;i<headers.length;i++){           
            newobj[headers[i]]=r[i];      
                 
        }
       result.push(newobj);
    });
   let obj = {};

  obj.content = result; 
  console.log(headers);
  console.log(obj);
    
    
    */}