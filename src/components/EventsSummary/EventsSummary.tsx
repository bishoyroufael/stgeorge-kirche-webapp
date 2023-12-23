import { EventCard } from "@components/EventCard";
import React from "react";
import { Event } from "../../sheets/utils";

export const EventsSummary = ({ title, eventsData }: {title: string, eventsData: Array<Event>}): React.JSX.Element => {
    return (
        <div className="relative bg-white w-full pt-20">
            {/* Header Title */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
            <div className="justify-between flex gap-y-4 lg:gap-x-4 flex-col lg:flex-row">
                    {eventsData[0] ? <EventCard eventName={eventsData[0].Title} date={new Date(`${eventsData[0].Date} ${eventsData[0].Time}`)} location={eventsData[0].Location}/> : null}
                    {eventsData[1] ? <EventCard eventName={eventsData[1].Title} date={new Date(`${eventsData[1].Date} ${eventsData[1].Time}`)} location={eventsData[1].Location}/> : null}
                    {eventsData[2] ? <EventCard eventName={eventsData[2].Title} date={new Date(`${eventsData[2].Date} ${eventsData[2].Time}`)} location={eventsData[2].Location}/> : null}
            </div>
        </div>
    )
}