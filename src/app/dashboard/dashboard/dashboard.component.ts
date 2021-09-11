import {  Component, OnInit } from '@angular/core';
import { Appointments } from '../shared/Appointment';
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  page:number =1;
  tempAppoitnments:Appointments[];
  allAppoitnments:Appointments[];
  totallength!:number
  labels:any ={
    previousLabel:'<',
    nextLabel:">",
  }
  displayNone = {
    display:"none"
  };
  constructor(private service:AppointmentService) {
    this.tempAppoitnments=[];
    this.allAppoitnments=[];
    this.service.getAllAppoinments().subscribe(data=>{
      for(let ele of data){
        if(new Date(ele.AppointmentTime).toLocaleDateString() == new Date().toLocaleDateString())
          this.allAppoitnments.push(ele);
          if(ele.Status!='rejected')
          this.tempAppoitnments.push(ele);
      }})
    this.totallength=this.tempAppoitnments.length;
    //console.log(this.tempAppoitnments)
   }
  ngOnInit(): void {
  }
  rejectFn(appointment:Appointments){
    if(appointment.Status=='pending')
    appointment.Status='rejected';
    this.tempAppoitnments=this.tempAppoitnments.filter(a=>a.Status!='rejected');
  }
  acceptFn(appointment:Appointments){
    if(appointment.Status=='pending')
    appointment.Status='accepted';
  }
  

}
