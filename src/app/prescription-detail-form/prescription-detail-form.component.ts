import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Medicine } from '../shared/medicine';
import { PatientService } from '../shared/patient.service';
import * as data from '../shared/medicinedata.json';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-prescription-detail-form',
  templateUrl: './prescription-detail-form.component.html',
  styleUrls: ['./prescription-detail-form.component.css'],
})
export class PrescriptionDetailFormComponent implements OnInit {

  medicines : Medicine[] = [];
  addMedicineForm : FormGroup;

  control = new FormControl();
  medicineNames : string[] = []
  filteredMedicines!: Observable<string[]>;
  
  newMedicine : medicineDetails;
  newMedicineList : medicineDetails[];


  constructor(private builder: FormBuilder, private service : PatientService) {
    this.addMedicineForm = this.builder.group({
      medicine : [''],
      duration : [''],
      morning : [false],
      afternoon : [false],
      evening : [false],
      food : [false],
      description : ['']
    });
    this.medicines = (data as any).default;
    console.log(this.medicines);
    this.medicines.forEach(el => {
      this.medicineNames.push(el.name)
    });
    this.newMedicine = new medicineDetails();
    this.newMedicineList = [];
    console.log(this.newMedicineList);
   }


  ngOnInit(): void {
    this.filteredMedicines = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.medicineNames.filter(med => this._normalizeValue(med).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }


  addMedicineFn(){
    //console.log(this.addMedicineForm.value);
    // this.newMedicine = {...this.addMedicineForm.value};
    this.newMedicine.afternoon = this.addMedicineForm.value.afternoon;
    this.newMedicine.morning = this.addMedicineForm.value.morning;
    this.newMedicine.evening = this.addMedicineForm.value.evening;
    this.newMedicine.medicine = this.addMedicineForm.value.medicine;
    this.newMedicine.food = this.addMedicineForm.value.food;
    this.newMedicine.description = this.addMedicineForm.value.description;
    this.newMedicine.duration = this.addMedicineForm.value.duration;
    //this.service.addMedList(this.newMedicine);
    this.newMedicineList.push(this.newMedicine);
    this.newMedicine = new medicineDetails();
    console.log(this.newMedicineList);
    this.addMedicineForm.reset();
  }

  delete(id : number){
    // delete this.newMedicineList[id];
    // const index = this.newMedicineList.indexOf();
    // if (index > -1) {
    // this.newMedicineList.splice(index, 1);
    // }
    var temp=[]
    for(let i=0;i<this.newMedicineList.length;i++){
      if(i!=id)
      temp.push(this.newMedicineList[i])
    }
    this.newMedicineList=temp;
  }

  medicineJsonData !: any;

  addToExcel() {
    this.medicineJsonData = JSON.stringify(this.newMedicineList);
    console.log(this.medicineJsonData);
  }

}

class medicineDetails {
  medicine !: string;
    duration !: number;
      morning !: boolean;
      afternoon !: boolean;
      evening !: boolean;
      food !: boolean;
      description !: string; 
}
