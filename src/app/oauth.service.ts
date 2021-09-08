import { Injectable } from '@angular/core';
import { MsalService,BroadcastService } from '@azure/msal-angular';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OAuthService {

  constructor(private msalservice: MsalService , private broadcast : BroadcastService) {
    let loginsuccess : Subscription 
    console.log("Inside OAuth Service");
    loginsuccess = this.broadcast.subscribe(`msal:loginSuccess` ,(success)=>{
      console.log(success);
    })
   }

   logout() : void {
    this.msalservice.logout();
   }
}
