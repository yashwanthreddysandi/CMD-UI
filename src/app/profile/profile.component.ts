import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { OAuthService } from '../oauth.service';
import { ActiveIssue } from '../shared/ActiveIssue';
import { Allergy } from '../shared/Allergy';
import { MedicalProblem } from '../shared/MedicalProblem';
import { Patient } from '../shared/Patient';
import { PatientService } from '../shared/patient.service';
import { Symptom } from '../shared/Symptom';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  patient !: Patient;

  ActiveIssues !: ActiveIssue[];
  MedicalProblems !: MedicalProblem[];
  Allergies !: Allergy[];

  constructor(private service: PatientService , private oauth: OAuthService , private msalservice : MsalService) {
    this.patient = this.service.getCurrentPatient();
    this.ActiveIssues = [];
    this.MedicalProblems = [];
    this.Allergies = [];
  }


  ngOnInit(): void {
    console.log(this.msalservice.getAccount());
    this.service.getActiveIssues(this.patient.Id).subscribe();
    console.log(this.ActiveIssues);
}

OnClick(){
  this.oauth.logout();
}
}
