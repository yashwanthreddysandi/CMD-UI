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
        if(compareDates(new Date(ele.AppointmentTime),new Date())){
          this.allAppoitnments.push(ele);
          if(ele.Status!='rejected')
          this.tempAppoitnments.push(ele);
    }}})
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

function compareDates(d1:Date,d2:Date){

  if(d1.getFullYear()>d2.getFullYear())

    return true;

  if(d1.getFullYear()<d2.getFullYear())
  return false;
  if(d1.getMonth()>d2.getMonth())
  return true;
  if(d1.getMonth()<d2.getMonth())
  return false;
  return d1.getDate()>=d2.getDate();
}
