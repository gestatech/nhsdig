import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IgMainComponent} from './ig-main/ig-main.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {MessageDefinitionComponent} from "./message-definition/message-definition.component";

const routes: Routes = [
  {
    path: '', component: IgMainComponent,

    children : [
      { path: '', component: HomeComponent}
    ]
  },
  {
    path: 'message', component: IgMainComponent,

    children: [
      { path: ':messageid', component: MessageDefinitionComponent}
    ]
  },
  {
    path: 'profile', component: IgMainComponent,

    children: [
      { path: ':profileid', component: ProfileComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




