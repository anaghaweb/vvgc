"use server";
import { google } from "googleapis";
import { CalendarEvent } from "types/global";

export async function AllEventsData(): Promise<CalendarEvent[]> {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.G_EMAIL,
        private_key: process.env.G_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets.readonly",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.G_ID,
      range: "AllEvents!A1:Z1000",
    });

    const rows = response.data.values;
    if (!rows) return [];
    const events: CalendarEvent[] = [];
    let currentEvent: CalendarEvent | null = null;

    rows.forEach((row, index) => {     
      if (index === 0) return; 
        const date = row[0] || "";
        const id = row[1] || "";
        const title = row[2] || "";
        const subtitle = row[3] || "";
        const details = row[4] || "";
        const startTime = row[5] || "";
        const endTime = row[6] || "";
        const imageUrl = row[7] || "";
        const sponsorLink = row[8] || "";
        const registerLink = row[9] || "";
        const type = row[10] || "";
        const location = row[11] || "";

        if (id && title) {
          if (currentEvent) {
            events.push(currentEvent);
          }
          currentEvent = {
            id,
            date: new Date(date),
            title,
            subtitle,
            eventList: [],
            type,
            location,
          };
        }
        if (currentEvent) {
          currentEvent?.eventList?.push({
            details: details ? details : "",
            startTime: startTime ? startTime : "",
            endTime: endTime ? endTime : "",
            imageUrl: imageUrl ? imageUrl : "",
            sponsorLink: sponsorLink ? sponsorLink : "",
            registerLink: registerLink ? registerLink : "",
          });
        }
    });
    if (currentEvent) {
      events.push(currentEvent);
    }
    console.log(events[0].id);
    return events;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
}
