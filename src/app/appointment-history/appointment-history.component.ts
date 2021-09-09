import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.css']
})
export class AppointmentHistoryComponent implements OnInit {
@Input('id') id!:number;
appointments:Appointment[];
  constructor(private service:PatientService) {
    this.appointments=[];
   }

  ngOnInit(): void {
    this.service.getAppointmentsByPatientId(this.id).subscribe(ap=>{
      for(let i=0;i<ap.length;i++)
        this.appointments.push(<Appointment>ap[i]);
    })

  }

}
