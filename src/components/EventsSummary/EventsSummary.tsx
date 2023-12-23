import { EventCard } from "@components/EventCard";
import React from "react";
import { Event } from "../../sheets/utils";

export const EventsSummary = ({ title, eventsData }: {title: string, eventsData: Array<Event>}): React.JSX.Element => {
    return (
        <div className="relative bg-white w-full pt-20">
            {/* Header Title */}
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <div className="justify-between flex gap-y-4 lg:gap-x-4 flex-col lg:flex-row">
                    {eventsData[0] ? <EventCard eventName={eventsData[0].title} date={new Date(`${eventsData[0].date} ${eventsData[0].time}`)} location={eventsData[0].location}/> : null}
                    {eventsData[1] ? <EventCard eventName={eventsData[1].title} date={new Date(`${eventsData[1].date} ${eventsData[1].time}`)} location={eventsData[1].location}/> : null}
                    {eventsData[2] ? <EventCard eventName={eventsData[2].title} date={new Date(`${eventsData[2].date} ${eventsData[2].time}`)} location={eventsData[2].location}/> : null}
            </div>
        </div>
    )
}