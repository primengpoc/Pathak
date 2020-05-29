import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
//import CalenderService from './calender.service'; 

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  events: any[];

  options: any;
          
  constructor() { }

  ngOnInit() {
      //this.eventService.getEvents().then(events => {this.events = events;});
      
      this.options = {
          plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
          defaultDate: new Date,
          header: {
              left: 'prev,next',
              center: 'title',
              right: 'month,agendaWeek,agendaDay'
          }
      }
  }

}
