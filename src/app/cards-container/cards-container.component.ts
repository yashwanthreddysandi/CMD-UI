import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/Patient';
import { PatientService } from '../shared/patient.service';


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  totallength !:number ;
  page:number = 1;
  patientList : Patient[] = [];
  tempPatientList : Patient[] = [];
  prefix : string = "";

  labels: any = {
    previousLabel: ' < ',
    nextLabel: ' > ',
  }

  constructor(private service : PatientService) { }

  ngOnInit(): void {
    this.service.getPatientDetails().subscribe(p =>{
      for(let i=0;i<p.length;i++){
        this.patientList.push(<Patient>p[i])}
    });
    this.totallength = this.patientList.length;
    this.tempPatientList = this.patientList;
    //console.log(this.patientList);
  }

  OnSearch(prefix :string)
  {
    this.prefix = prefix;
    console.log(this.prefix);
    if(this.prefix == "")
    {
      this.tempPatientList = this.patientList;
    }
    let searchedPatientList : Patient[] = [];
    for(var i=0;i<this.patientList.length;i++)
    {
      if(this.patientList[i].Name.substring(0,this.prefix.length).toLowerCase() == this.prefix.toLowerCase())
      {
        searchedPatientList.push(this.patientList[i]);
      }
    }
    this.tempPatientList = searchedPatientList;
  }

  onclick(patient: Patient){
    // console.log("This is somethin", patient);
    this.service.setCurrentPatient(patient);
  }

}
