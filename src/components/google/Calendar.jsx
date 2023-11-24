import React from 'react'
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
const GoogleCalendar = () => {
    const API_KEY = "AIzaSyD8beVxWFuuMU_jreUnx7eyWdBWJz8mw8Y";
    let calendars = [
        { calendarId: "https://calendar.google.com/calendar/embed?src=numl-f19-15170%40numls.edu.pk&ctz=Asia%2FKarachi" },
        {
          calendarId: "https://calendar.google.com/calendar/embed?src=numl-f19-15170%40numls.edu.pk&ctz=Asia%2FKarachi",
          color: "#B241D1", //optional, specify color of calendar 2 events
        },
      ];
      let styles = {
        //you can use object styles (no import required)
        calendar: {
          borderWidth: "3px", //make outer edge of calendar thicker
        },
      
        //you can also use emotion's string styles
        today: css`
          /* highlight today by making the text red and giving it a red border */
          color: #0fa3b1;
          border: 1px solid #0fa3b1;
        `,
      };
      
  return (
    <div>
        <Calendar apiKey={API_KEY} calendars={calendars}
        styles={styles}
        />
      </div>
  )
}

export default GoogleCalendar
