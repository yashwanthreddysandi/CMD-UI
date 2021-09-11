import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Medicine } from '../shared/medicine';
import { PatientService } from '../shared/patient.service';
import * as data from '../shared/medicinedata.json';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { ExcelService } from '../shared/excel.service';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-prescription-detail-form',
  templateUrl: './prescription-detail-form.component.html',
  styleUrls: ['./prescription-detail-form.component.css'],
})
export class PrescriptionDetailFormComponent implements OnInit {

  panelOpenState = false;
  medicines : Medicine[] = [];
  addMedicineForm : FormGroup;

  control = new FormControl();
  medicineNames : string[] = [];
  //filteredMedicines!: Observable<string[]>;
   filteredMedicines!:string[];
  newMedicine : medicineDetails;
  newMedicineList : medicineDetails[];


  constructor(private builder: FormBuilder, private service : PatientService, private excelService : ExcelService) {
    this.addMedicineForm = this.builder.group({
      medicine : ['', Validators.required],
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
      this.medicineNames.push(el.name);
    });
    this.newMedicine = new medicineDetails(false, false);
    this.newMedicineList = [];
    console.log(this.newMedicineList);
   }


  ngOnInit() {
    // this.filteredMedicines = this.control.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
    this.filteredMedicines = this.medicineNames;
  }
  

  // private _filter(value: string): string[] {
  //   const filterValue = this._normalizeValue(value);
  //   console.log(filterValue);
  //   return this.medicineNames.filter(med => this._normalizeValue(med).includes(filterValue));
    
  // }

  // private _normalizeValue(value: string): string {
  //   return value.toLowerCase().replace(/\s/g, '');
  // }


  addMedicineFn(){
    //console.log(this.addMedicineForm.value);
    // this.newMedicine = {...this.addMedicineForm.value};
    if(this.addMedicineForm.value.afternoon == null){
      this.newMedicine.afternoon = false;
    }
    else {
      this.newMedicine.afternoon = this.addMedicineForm.value.afternoon;
    }
    if(this.addMedicineForm.value.morning == null){
      this.newMedicine.morning = false;
    }
    else {
      this.newMedicine.morning = this.addMedicineForm.value.morning;
    }
    if(this.addMedicineForm.value.evening == null){
      this.newMedicine.evening = false;
    }
    else {
      this.newMedicine.evening = this.addMedicineForm.value.evening;
    }
    if(this.addMedicineForm.value.food == null){
      this.newMedicine.food = false;
    }
    else {
      this.newMedicine.food = this.addMedicineForm.value.food;
    }
    
    //this.newMedicine.afternoon = this.addMedicineForm.value.afternoon;
    // this.newMedicine.morning = this.addMedicineForm.value.morning;
    // this.newMedicine.evening = this.addMedicineForm.value.evening;
    this.newMedicine.medicine = this.addMedicineForm.value.medicine;
    this.newMedicine.price = this.medicines[this.medicines.findIndex(x => x.name === this.addMedicineForm.value.medicine)].price;
    // this.newMedicine.food = this.addMedicineForm.value.food;
    this.newMedicine.description = this.addMedicineForm.value.description;
    this.newMedicine.duration = this.addMedicineForm.value.duration;
    //this.service.addMedList(this.newMedicine);
    this.newMedicineList.push(this.newMedicine);
    this.newMedicine = new medicineDetails(false, false);
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
    this.excelService.exportAsExcelFile(this.newMedicineList, 'MedicineData');
    //this.exportAsXls();
  }
  // exportAsXls(): void {
  //   this.excelService.exportAsExcelFile(this.newMedicineList, 'MedicineData');
  //   console.log("this function is called");
  // }

}

class medicineDetails {
  medicine !: string;
    duration !: number;
      morning : boolean = false;
      afternoon : boolean = false;
      evening : boolean = false;
      food : boolean = false;
      description !: string;
      price!: number;
  
  constructor(_morning: boolean, _afternoon: boolean) {
    this.morning = _morning;
    this.afternoon = _afternoon;
  }
}
