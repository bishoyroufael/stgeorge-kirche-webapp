import React, { useEffect, useState } from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import deLocale from '@fullcalendar/core/locales/de';
import { Event } from "../../sheets/utils";
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';


// Function to convert date and time strings to ISO format
// autogenerated
const convertToISOFormat = (dateString, timeString) => {
    const [month, day, year] = dateString.split('/');
    const [time, period] = timeString.split(' ');

    let [hours, minutes] = time.split(':');
    if (period === 'PM' && hours !== '12') {
        hours = String(Number(hours) + 12);
    } else if (period === 'AM' && hours === '12') {
        hours = '00';
    }

    var date = new Date(year, month - 1, day, hours, minutes)

    return date.toISOString()
};

export const Calendar = ({ events }: { events: Array<Event> }) => {
    const [calendarEvents, setCalendarEvents] = useState([])

    useEffect(() => {
        // console.log(events);
        const calendarEvents = events.map((obj) => ({
            title: obj.title,
            start: convertToISOFormat(obj.date, obj.time),
        }));

        setCalendarEvents(calendarEvents);
    }, [events])

    return (
        <div className="mx-auto max-w-screen-xl min-w-[100%]">
            <div className="pt-10"></div>
            <div>
                <h2 className="text-4xl font-bold mb-4">Alle Veranstaltungen</h2>

                <div className="invisible h-0 lg:visible lg:h-auto" data-aos="fade-up">
                    <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={calendarEvents} locale={deLocale} headerToolbar={{ start: 'title', end: 'prev,next' }} eventClassNames={'flex flex-wrap'} dayHeaderClassNames={'bg-c-background'}/>
                </div>

                {/* For Smaller Screens */}
                <div className="lg:hidden lg:h-0" data-aos="fade-up">
                    <FullCalendar plugins={[listPlugin]} initialView="listWeek" events={calendarEvents} locale={deLocale} headerToolbar={{ start: 'title', end: 'prev,next' }} />
                </div>
            </div>
        </div>
    )
}