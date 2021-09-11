import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActiveIssue } from 'src/app/shared/ActiveIssue';
import { Patient } from 'src/app/shared/Patient';
import { PatientService } from 'src/app/shared/patient.service';
import { Appointments } from '../shared/Appointment';
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})
export class AppointmentCardComponent implements OnInit {

  addParameter!:boolean;
  Patient!:Patient;
  activeIssues: ActiveIssue[] = [];

  @Input() Appointment!:Appointments; 
  @Output('parent1') parent1:EventEmitter<any>=new EventEmitter();
  @Output('parent2') parent2:EventEmitter<any>=new EventEmitter();
  constructor(private service:AppointmentService, private ps:PatientService) { 
    this.addParameter = false;
    console.log(this.Appointment)
  }


  ngOnInit(): void {
    this.ps.getPatientDetailsById(this.Appointment.PatientId).subscribe(data => {
      this.Patient = data;
    });

    this.ps.getActiveIssues(this.Appointment.PatientId).subscribe(ai => {
      //console.log(ai);
      this.activeIssues = ai;
    });
    console.log(this.activeIssues);
  }
  toggleForm() {
    this.addParameter = !this.addParameter
  }

  accept(id:number){
    this.service.acceptAppointment(id).subscribe(data => {
      this.Appointment = data as Appointments;
    })
    // this.Appointment.Status = "accepted"
    this.parent2.emit();
  }

  reject(id:number){
    // this.service.rejectAppointment(id);
   
    this.service.rejectAppointment(id).subscribe(data => {
      this.Appointment = data as Appointments;
      
    });
   
    this.parent1.emit();

  }


}
