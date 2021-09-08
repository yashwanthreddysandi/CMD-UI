import { Component, Directive, OnInit } from '@angular/core';
import { Symptom } from '../shared/Symptom';

@Component({
  selector: 'app-symptom-history',
  templateUrl: './symptom-history.component.html',
  styleUrls: ['./symptom-history.component.css']
})
export class SymptomHistoryComponent implements OnInit {

  constructor() {
    this.view = "Show";
    this.show = false;
   }

  ngOnInit(): void {
  }

  symptoms : Symptom[] = []
  show: boolean;
  // hide: boolean = true;

  view!: string;
  showDetail(){
    if(this.show == false){
      this.show = true;
      this.view = "Hide";
    }
    else {
      this.show = false;
      this.view = "Show";
    }
  }

}
