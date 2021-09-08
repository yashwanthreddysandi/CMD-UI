import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MsalAngularConfiguration, MsalInterceptor, MsalModule, MsalService, MSAL_CONFIG, MSAL_CONFIG_ANGULAR } from '@azure/msal-angular';
import { Configuration } from 'msal';
import { msalAngularConfig, msalConfig } from './app-config';
import { SymptomHistoryComponent } from './symptom-history/symptom-history.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';

function MSALConfigFactory(): Configuration {
  return msalConfig;
}

function MSALAngularConfigFactory(): MsalAngularConfiguration {
  return msalAngularConfig;
}


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsContainerComponent,
    ProfileComponent,
    SidebarComponent,
    SymptomHistoryComponent,
    AppointmentHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    MsalModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
       useClass: MsalInterceptor,
       multi: true,
     },
     {
       provide: MSAL_CONFIG,
       useFactory: MSALConfigFactory,
     },	
     {
       provide: MSAL_CONFIG_ANGULAR,
       useFactory: MSALAngularConfigFactory,
     },
     MsalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
