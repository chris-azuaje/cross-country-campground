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
  function onDataBinding(e: Record<string, any>): void {
    const items: Record<string, any>[] = e.result as Record<
      string,
      Record<string, any>[]
    >;
    const schedulerData: Record<string, any>[] = [];
    if (items.length > 0) {
      for (const event of items) {
        const isAllDay: boolean = !event.start.dateTime;
        let start: string = event.start.dateTime as string;
        let end: string = event.end.dateTime as string;
        if (isAllDay) {
          start = event.start.date as string;
          end = event.end.date as string;
        }
        schedulerData.push({
          Id: event.id,
          Subject: event.summary,
          StartTime: new Date(start),
          EndTime: new Date(end),
          IsAllDay: isAllDay,
        });
      }
    }
    e.result = schedulerData;
  }
  return (
    <div className='modal-window calendar'>
      <div className='exitBtn-container'>
        <button className='exitBtn'>X</button>
      </div>
      <h2 className='section-title'>Campground Calendar</h2>
      <ScheduleComponent
        currentView='Month'
        eventSettings={{ dataSource: remoteData }}
        dataBinding={onDataBinding}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}></Inject>
      </ScheduleComponent>
    </div>
  );
}
