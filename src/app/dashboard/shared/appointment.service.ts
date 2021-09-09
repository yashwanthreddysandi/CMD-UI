import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  api_url ="http://localhost:59281/api/appointment";

  getAllAppoinments(){
    return this.http.get<any>(this.api_url)
  }
}
