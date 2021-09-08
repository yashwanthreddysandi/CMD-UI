import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  constructor(private http: HttpClient) { }

  currentPatient !: Patient;

  setCurrentPatient(patient: Patient){
    this.currentPatient = patient;
  }

  getCurrentPatient(){
    return this.currentPatient;
  }

  getPatientDetails(){
    return this.http.get<any>("http://localhost:59848/api/Patient");
  }

  getPatientDetailsById(id : number) {
    return this.http.get<any>(`http://localhost:59848/api/patient/patient/${id}`)
  }

  getAllergies(id: number){
    return this.http.get<any>(`http://localhost:59848/api/patient/allergy/${id}`);
  }

  getSymptoms(id: number) {
    return this.http.get<any>(`http://localhost:59848/api/patient/symptom/${id}`)
  }

  getActiveIssues(id: number){
    return this.http.get<any>(`http://localhost:59848/api/patient/activeissue/${id}`)
  }

  getMedicalProblems(id: number){
    return this.http.get<any>(`http://localhost:59848/api/patient/medicalproblem/${id}`)
  }

}
