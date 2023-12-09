import axios from "axios";


export interface Event {
    Title: string;
    Description: string;
    Location: string;
    Date: string;
    Time: string;
}

// autogenerated
// Function which queries the information from the 
// excel sheet
export async function getLastTenChurchEvents() {
    const sheetId = process.env.EVENTS_SHEET_ID;
    const apiKey = process.env.GOOGLE_API_KEY;
    const rangeLastTenEvents = 'J5:N15';
    const response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Events!${rangeLastTenEvents}?alt=json&key=${apiKey}`
    );


    // Extract headers and events data
    const [headers, ...events] : Array<Array<string>> = response.data.values;

    // Convert events to an array of objects
    const eventsArray: Array<Event> = events.map((event) => {
        const eventObject: Event = {} as Event;
        headers.forEach((header, index) => {
            eventObject[header as keyof Event] = event[index];
        });
        return eventObject;
    });

    // Sort events by date and time
    eventsArray.sort((a, b) => {
        const dateA = new Date(`${a.Date} ${a.Time}`);
        const dateB = new Date(`${b.Date} ${b.Time}`);
        return dateA.getTime() - dateB.getTime();
    });

    return eventsArray
}

// autogenerated
export function getNextThreeEvents(events: Array<Event>): Array<Event> {
  const now = new Date();

  // Filter events happening after the current time
  const futureEvents = events.filter((event) => {
    const eventDateTime = new Date(`${event.Date} ${event.Time}`);
    return eventDateTime > now;
  });

  // Sort the filtered events by date and time
  futureEvents.sort((a, b) => {
    const dateA = new Date(`${a.Date} ${a.Time}`);
    const dateB = new Date(`${b.Date} ${b.Time}`);
    return dateA.getTime() - dateB.getTime();
  });
  
  // Return the next three events
  return futureEvents.slice(0, 3);
}