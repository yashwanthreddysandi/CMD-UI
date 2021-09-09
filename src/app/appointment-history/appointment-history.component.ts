import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { Appointment } from '../shared/Appointment';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent implements OnInit {
  @Input('id') id!: number;
  appointments: Appointment[];
  filtered_appointments:Appointment[];
  tempyearList: any;
  yearList: number[];
  year!:number;
  constructor(private service: PatientService) {
    this.appointments = [];
    this.tempyearList = new Set();
    this.yearList = [];
    this.filtered_appointments=[];
  }

  ngOnInit(): void {
    this.service.getAppointmentsByPatientId(this.id).subscribe(ap => {
      for (let i = 0; i < ap.length; i++)
        this.appointments.push(<Appointment>ap[i]);
      this.filtered_appointments = this.appointments;
      for (let i = 0; i < this.appointments.length; i++) {
        this.tempyearList.add((new Date(this.appointments[i].AppointmentTime)).getFullYear());
      }
      for (let year of this.tempyearList)
        this.yearList.push(year);
      this.yearList = this.yearList.sort((a, b) => a - b);
    })


  }
  sameDay(apDate: Date) {

    var cur = new Date();
    apDate = new Date(apDate);
    if (cur.getDate() == apDate.getDate() && cur.getMonth() == apDate.getMonth() && cur.getFullYear() == apDate.getFullYear())
      return true;
    return false;
  }
  filter(){
   console.log(this.appointments.length)
    this.filtered_appointments = this.appointments.filter(a=>(new Date(a.AppointmentTime)).getFullYear()==this.year)
  }

}