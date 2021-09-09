import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { DialogComponent } from '../dialog/dialog.component';
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
  id:number;
  constructor(private service: PatientService,private router:ActivatedRoute , private oauth: OAuthService , private msalservice : MsalService, public dialog: MatDialog) {
    this.id= this.router.snapshot.params.id;
    // this.patient = this.service.
    this.ActiveIssues = [];
    this.MedicalProblems = [];
    this.Allergies = [];    
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogComponent, {

      width: '100%',
      height: '100%',
      // maxHeight: '100vh',
      maxWidth: '100vw'

      // data: {name: this.name, animal: this.animal}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }

  ngOnInit(): void {
   //console.log(this.msalservice.getAccount());
   this.service.getPatientDetailsById(this.id).subscribe(p=>this.patient=<Patient>p);
     this.service.getActiveIssues(this.id).subscribe(a=>{
       
       for(let i=0;i<a.length;i++)
       {
          this.ActiveIssues.push(<ActiveIssue>a[i]);
       }
      
     });
     this.service.getAllergies(this.id).subscribe(a=>{
      
      for(let i=0;i<a.length;i++)
      {
         this.Allergies.push(<Allergy>a[i]);
      }
     
    });
    this.service.getMedicalProblems(this.id).subscribe(m=>{
      
      for(let i=0;i<m.length;i++)
      {
         this.MedicalProblems.push(<MedicalProblem>m[i]);
      }
     
    });
    
    console.log(this.Allergies);
     
  }


OnClick(){
  this.oauth.logout();
}
}
