import { EventCard } from "@components/EventCard";
import React from "react";

export const EventsSummary = ({ title, eventsData }): React.JSX.Element => {
    return (
        <div className="relative bg-white w-full pt-20">
            {/* Header Title */}
            <h2 className="text-5xl font-bold mb-4">{title}</h2>
            <div className="justify-between flex space-x-20">
                    <EventCard eventName={'Test'} date={new Date()} location={'Dresden'}/>
                    <EventCard eventName={'Test'} date={new Date()} location={'Dresden'}/>
                    <EventCard eventName={'Test'} date={new Date()} location={'Dresden'}/>
            </div>
        </div>
    )
}