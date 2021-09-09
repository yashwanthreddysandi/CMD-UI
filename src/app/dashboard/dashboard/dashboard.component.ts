import { Component, OnInit } from '@angular/core';
import { Appointments } from '../shared/Appointment';
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  page:number =1;
  tempAppoitnments:Appointments[] =[]
  totallength!:number
  labels:any ={
    previousLabel:'<',
    nextLabel:">",
  }
  constructor(private service:AppointmentService) {
    this.service.getAllAppoinments().subscribe((data:Appointments[])=>{
      data.forEach((ele)=>{
        this.tempAppoitnments.push(ele);
      })
    })
    this.totallength=this.tempAppoitnments.length;
    console.log(this.tempAppoitnments)
   }
  ngOnInit(): void {
  }
}
