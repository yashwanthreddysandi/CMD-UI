import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../shared/Patient';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() patient !: Patient;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.patient);
    // console.log(this.patientId);
  }

}
