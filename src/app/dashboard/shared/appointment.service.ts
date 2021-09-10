import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  api_url = "http://cmd-backend.skillassure.com:8093/api/appointment";

  getAllAppoinments(){
    return this.http.get<any>(this.api_url)
  }
  
  acceptAppointment(id:number){
    return this.http.post(this.api_url + `/accept/${id}`, null);
  }

  rejectAppointment(id:number){
    return this.http.post(this.api_url + `/reject/${id}`, null);
  }
}
