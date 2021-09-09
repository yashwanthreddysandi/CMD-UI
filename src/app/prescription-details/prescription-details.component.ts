import { Component, Input, OnInit } from '@angular/core';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.css']
})
export class PrescriptionDetailsComponent implements OnInit {

  @Input('medicine') medicine !: any;
  medicinesList : any[] = [];
  constructor(private service : PatientService) {
    this.medicinesList = this.service.getMedList();
    console.log(this.service.getMedList());
    console.log(this.medicinesList);
    console.log("this medi", this.medicinesList.length);
   }


  ngOnInit(): void {
    // console.log("this is printed",this.medicine);
    
  }

  
  

}
