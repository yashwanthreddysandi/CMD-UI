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
  displayNone = {
    display:"none"
  };
  constructor(private service:AppointmentService) {
    this.service.getAllAppoinments().subscribe(data=>{
      for(let ele of data){
        if(new Date(ele.AppointmentTime).toLocaleDateString() == new Date().toLocaleDateString() && ele.Status!='rejected')
          this.tempAppoitnments.push(ele);
      }})
    this.totallength=this.tempAppoitnments.length;
    //console.log(this.tempAppoitnments)
   }
  ngOnInit(): void {
  }

}
