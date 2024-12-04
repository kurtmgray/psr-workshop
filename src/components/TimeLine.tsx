'use client';

import React, { useRef, useEffect, useState } from 'react';

type TimelineEvent = {
  date: string;
  title: string;
  description: string;
};

type TimelineProps = {
  events: TimelineEvent[];
};

export default function TimeLine({ events }: TimelineProps) {
  const [selectedIndex, setSelectedIndex] = useState(0); // Track the current selected event
  const lineRef = useRef<HTMLDivElement>(null); // Reference to the timeline line

  // Calculate the relative position of an event based on its date
  const calculatePosition = (date: string) => {
    const start = new Date(events[0].date);
    const end = new Date(events[events.length - 1].date);
    const event = new Date(date);

    // Edge case: Ensure dates are valid
    if (
      isNaN(start.getTime()) ||
      isNaN(end.getTime()) ||
      isNaN(event.getTime())
    ) {
      throw new Error('Invalid date format');
    }

    // Calculate total months between start and end
    const totalMonths =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) +
      1; // +1 to include the last month

    // Calculate the event's month index relative to the start date
    const eventMonthIndex =
      (event.getFullYear() - start.getFullYear()) * 12 +
      (event.getMonth() - start.getMonth()) +
      1;

    // Ensure the event date falls within the range
    if (eventMonthIndex < 1 || eventMonthIndex > totalMonths) {
      throw new Error('Event date is outside the timeline range');
    }

    console.log(eventMonthIndex, totalMonths);

    // Calculate relative position as a percentage
    const relativePosition = (eventMonthIndex / totalMonths) * 100;
    console.log(date, relativePosition);
    return `${relativePosition}%`;
  };

  useEffect(() => {
    // Update the line fill effect
    const line = lineRef.current;
    if (line) {
      const eventDate = new Date(events[selectedIndex].date);
      const month = eventDate.getMonth();
      const fillLength = (month / 11) * 100;
      line.style.background = `linear-gradient(to right, #3b82f6 ${fillLength}%, #e5e7eb ${fillLength}%)`;
      line.style.transition = 'background 0.4s ease-in'; // Smooth fill transition
    }
  }, [selectedIndex, events.length]);

  const reformatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      year: '2-digit',
    };

    const [month, year] = new Intl.DateTimeFormat('en-US', options)
      .formatToParts(date)
      .filter((part) => part.type === 'month' || part.type === 'year')
      .map((part) => part.value);

    return `${month} '${year}`;
  };

  return (
    <section className="w-full max-w-4xl mx-auto">
      <div className="relative w-full h-16">
        {/* Horizontal Timeline Line */}
        <div
          ref={lineRef}
          className="absolute top-1/2 left-0 h-[6px] w-full bg-gray-300 transform -translate-y-1/2"
        ></div>

        {/* Timeline Events */}
        {events.map((event, index) => (
          <button
            key={index}
            className="absolute top-[30%] transform translate-y-0.5 -translate-x-1/2 text-center px-4"
            style={{ left: calculatePosition(event.date) }}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            <div
              className={`w-6 h-6 rounded-full border-[3px] ${
                selectedIndex >= index
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-gray-300 bg-white'
              }`}
            ></div>
            <span className="text-xs text-gray-500 block mt-2">
              {reformatDate(event.date)}
            </span>
          </button>
        ))}
      </div>

      {/* Event Details */}
      <div className="mt-8 text-left">
        <h2 className="text-xl font-semibold text-blue-700">
          {events[selectedIndex].title}
        </h2>
        <p className="text-gray-600">{events[selectedIndex].description}</p>
      </div>
    </section>
  );
}
