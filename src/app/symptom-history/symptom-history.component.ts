import { Component, Directive, Input, OnInit } from '@angular/core';
import { PatientService } from '../shared/patient.service';
import { Symptom } from '../shared/Symptom';

@Component({
  selector: 'app-symptom-history',
  templateUrl: './symptom-history.component.html',
  styleUrls: ['./symptom-history.component.css']
})
export class SymptomHistoryComponent implements OnInit {
@Input('id') Id!:number;
symptoms:Symptom[];
showList:boolean[];
view:string[];
  constructor(private service:PatientService) {
    // this.view = "Show";
    // this.show = false;
    this.symptoms=[];
    this.showList=[];
    this.view=[];
   }

  ngOnInit(): void {
    this.service.getSymptoms(this.Id).subscribe(s=>{
      for(let i=0;i<s.length;i++)
      {
         this.symptoms.push(<Symptom>s[i]);
         this.showList.push(false);
         this.view.push("Show");
      }
     
    });
  }
 // show: boolean;
  // hide: boolean = true;

 // view!: string;
  showDetail(id:number){
    if(this.showList[id]==false)
    {
    this.showList[id]=true;
    this.view[id]="Hide";
    }
    else{
    this.showList[id]=false;
    this.view[id]="Show";
    }
    // if(this.show == false){
    //   this.show = true;
    //   this.view = "Hide";
    // }
    // else {
    //   this.show = false;
    //   this.view = "Show";
    // }
  }

}
