import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-equipments-calendar',
  standalone: true,
  imports: [FullCalendarModule, HttpClientModule],
  templateUrl: './equipments-calendar.component.html',
  styleUrl: './equipments-calendar.component.css'
})
export class EquipmentsCalendarComponent {
  equipments: any = [
    {
      "title": "Equipment 1",
      "start": "2023-12-04"
    }
];

calendarOptions!: CalendarOptions;

constructor(private http:HttpClient) {}

ngOnInit(){
  //web api calling to get dynamic events
  this.http.get('http://localhost').subscribe(data => {
      this.equipments.push(data);
      console.log(this.equipments);
      
 });
this.calendarOptions = {
  initialView: 'dayGridMonth',
  plugins: [dayGridPlugin],
  events: this.equipments[0]};
};
}
