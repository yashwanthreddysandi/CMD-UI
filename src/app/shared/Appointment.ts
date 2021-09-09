export class Appointment{
    $id !: string; 
    Id !: number;
    AppointmentTime!:Date;
    Status!:string;
    PatientId!:number;
    DoctorId!:number;
}