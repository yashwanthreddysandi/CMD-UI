import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { CardComponent } from './card/card.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path: "card", component: CardComponent},
  {path: "cardContainer", component: CardsContainerComponent},
  {path: "profile", component: ProfileComponent},
  {path: "sidebar", component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
