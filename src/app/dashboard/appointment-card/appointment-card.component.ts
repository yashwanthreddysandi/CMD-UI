import { Component, Input, OnInit } from '@angular/core';
import { Appointments } from '../shared/Appointment';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})
export class AppointmentCardComponent implements OnInit {

  addParameter!:boolean

  @Input() Appointment!:Appointments;  
  constructor() { 
    this.addParameter = false;
    console.log(this.Appointment)
  }

  ngOnInit(): void {
  }
  toggleForm() {
    this.addParameter = !this.addParameter
  }

}
