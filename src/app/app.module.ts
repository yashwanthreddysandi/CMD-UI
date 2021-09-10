import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MsalAngularConfiguration, MsalInterceptor, MsalModule, MsalService, MSAL_CONFIG, MSAL_CONFIG_ANGULAR } from '@azure/msal-angular';
import { Configuration } from 'msal';
import { msalAngularConfig, msalConfig } from './app-config';
import { SymptomHistoryComponent } from './symptom-history/symptom-history.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { PrescriptionDetailFormComponent } from './prescription-detail-form/prescription-detail-form.component';
import {MatAutocomplete, MatAutocompleteModule} from '@angular/material/autocomplete';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';
import { AppointmentCardComponent } from './dashboard/appointment-card/appointment-card.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { TopDashboardComponent } from './dashboard/top-dashboard/top-dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';



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
    AppointmentHistoryComponent,
    DialogComponent,
    PrescriptionDetailFormComponent,
    PrescriptionDetailsComponent,
    AppointmentCardComponent,
    DashboardComponent,
    TopDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    MsalModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
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
