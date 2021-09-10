import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  medList : any[];

  constructor(private http: HttpClient) {
    this.medList = [];
   }

  medicinedetail !: any;

  addMedList(data: any) {
    this.medList.push(data);
  }

  getMedList(){
    return this.medList;
  }

  getPatientDetails(){
    return this.http.get<any>("http://cmd-backend.skillassure.com:8091/api/Patient");
  }

  getPatientDetailsById(id : number) {
    return this.http.get<any>(`http://cmd-backend.skillassure.com:8091/api/patient/${id}`)
  }

  getAllergies(id: number){
    return this.http.get<any>(`http://cmd-backend.skillassure.com:8091/api/allergy/${id}`);
  }

  getSymptoms(id: number) {
    return this.http.get<any>(`http://cmd-backend.skillassure.com:8091/api/symptom/${id}`)
  }

  getActiveIssues(id: number){
    return this.http.get<any>(`http://cmd-backend.skillassure.com:8091/api/activeissue/${id}`)
  }

  getMedicalProblems(id: number){
    return this.http.get<any>(`http://cmd-backend.skillassure.com:8091/api/medicalproblem/${id}`)
  }

  getAppointmentsByPatientId(id:number){
    return this.http.get<any>(`http://cmd-backend.skillassure.com:8093/api/appointment/patient/${id}`)
  }

}
