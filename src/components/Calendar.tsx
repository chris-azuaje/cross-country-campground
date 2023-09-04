import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

export function Calendar() {
  const calendarID: string = 'en.usa#holiday@group.v.calendar.google.com';
  const apiAccessKey: string = 'AIzaSyBF56nFiwf69t0LfvKhe1eRGUd4XRSY8FE';
  const remoteData: DataManager = new DataManager({
    url:
      'https://www.googleapis.com/calendar/v3/calendars/' +
      calendarID +
      '/events?key=' +
      apiAccessKey,
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });

  return (
    <div className='calendar'>
      <div className='exitBtn-container'>
        <button className='exitBtn'>X</button>
      </div>
      <h2 className='section-title'>Campground Calendar</h2>
      <ScheduleComponent
        currentView='Month'
        eventSettings={{ dataSource: remoteData }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}></Inject>
      </ScheduleComponent>
    </div>
  );
}
