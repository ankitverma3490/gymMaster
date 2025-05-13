import React, { useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import moment from 'moment';
import "./FullCalender.css"

const FullCalender = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendarApi = calendarRef.current?.getApi();
    const today = moment().day();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const view = isMobile ? 'timeGridDay' : 'timeGridWeek';

    calendarApi?.changeView(view);
    calendarApi?.setOption('firstDay', today);
  }, []);

  return (
    <div className="cal-wrapper">
    <FullCalendar
      ref={calendarRef}
      plugins={[timeGridPlugin, listPlugin]}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay,listWeek',
      }}
      buttonText={{
        today: 'Today',
        week: 'Weekly',
        day: 'Daily',
        list: 'List',
      }}
      navLinks={true}
      firstDay={moment().day()}
      hiddenDays={[0]} // Hide Sunday
      initialView="timeGridWeek"
      editable={true}
      selectable={true}
      unselectAuto={true}
      eventOverlap={false}
      eventColor="#f16621"
      slotDuration="00:15"
      allDaySlot={false}
      eventStartEditable={false}
      eventDurationEditable={false}
      slotLabelInterval="00:15"
      longPressDelay={0}
      nowIndicator={true}
      slotMinTime="09:00"
      slotMaxTime="19:45"
      validRange={{ start: moment().format('YYYY-MM-DD') }}
      eventContent={(arg) => ({ html: arg.event.title })}
      events="https://fullcalendar.io/demo-events.json"
      // FullCalendar responsiveness
      height="auto"
      windowResize={true} // Enable responsiveness on window resize
    />
  </div>
  );
};

export default FullCalender;
