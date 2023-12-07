import React from "react";
import { FaClock, FaMapPin } from "react-icons/fa";

interface DateInfo {
    month : string,
    dayOfMonth : number,
    dayOfWeek : string,
    time: string
}

function getDateInfo(date : Date) : DateInfo {
  // Get day of the month
  const dayOfMonth = date.getDate();

  // Get month as a shortened string
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();

  // Get day of the week as a string
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[date.getDay()];

  // Get time in HH:MM format
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Concatenate the results
  const dateInfo : DateInfo = {
    month,
    dayOfMonth,
    dayOfWeek,
    time
  };

  return dateInfo;
}

export const EventCard = ({eventName, date, location}): React.JSX.Element => {
    const dateInfo = getDateInfo(date)
    return (
        <div className="flex flex-col flex-grow bg-c-green rounded-md p-6 shadow-md max-w-md mx-auto m-w-[384px] m-h-[221px]">
            <p className="text-c-main text-md font-bold uppercase font-roboto text-left">UPCOMING EVENT</p>

            <div className="flex items-center justify-between my-2">
                <h2 className="text-white text-4xl font-bold font-roboto">{eventName}</h2>

                <div className="text-right">
                    <p className="text-white text-4xl font-bold font-roboto">{dateInfo.dayOfMonth}</p>
                    <p className="text-white font-roboto">{dateInfo.month}</p>
                </div>
            </div>

            <div className="flex items-center my-1 space-x-2">
                <FaClock color="white"/>
                <p className="text-white font-roboto">{dateInfo.dayOfWeek}, {dateInfo.time}</p>
            </div>

            <div className="flex items-center my-1 space-x-2">
                <FaMapPin color="white"/>
                <p className="text-white font-roboto">{location}</p>
            </div>
        </div>
    )
}