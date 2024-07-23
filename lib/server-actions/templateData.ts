'use server';
import { google } from 'googleapis';
import { SpecialEvent } from 'types/global';

export async function getTemplateEventData(): Promise<SpecialEvent[]> {
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
      range: 'template!A1:Z1000', // Adjust the range as needed
    });

    const rows = response.data.values;
    if (!rows) return [];

    const events: SpecialEvent[] = [];
    let currentEvent: SpecialEvent | null = null;

    rows.forEach((row, index) => {
      if (index === 0) return; // Skip header row

      const date = row[0] || '';
      const id = row[1] || '';
      const title = row[2] || '';
      const subtitle = row[3] || '';
      const description = row[4] || '';
      const name = row[5] || '';
      const startTime = row[6] || '';
      const endTime = row[7] || '';
      const imageUrl = row[8] || '';
      const sponsorLink = row[9] || '';
      const registerLink = row[10] || '';
      const display = row[11] || '';
      const type = row[12] || '';
      const location = row[13] || '';

      if (id) {
        // Push the previous event to the array
        if (currentEvent) {
          events.push(currentEvent);
        }
        // Start a new event
        currentEvent = {
          id,
          date: new Date(date),
          title,
          subtitle,
          description,
          event: [],
          imageUrl,
          sponsorLink,
          registerLink,
          display,
          type,
          location,
        };
      }

      // If currentEvent is defined and the row contains sub-event details
      if (currentEvent && (name || startTime || endTime)) {
        currentEvent.event?.push({
          name,
          startTime: startTime ? new Date(startTime) : undefined,
          endTime: endTime ? new Date(endTime) : undefined,
        });
      }
    });

    // Push the last event if it exists
    if (currentEvent) {
      events.push(currentEvent);
    }
    console.log(events.length)
    return events;
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong');
  }
}
