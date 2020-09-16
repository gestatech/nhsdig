import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IgMainComponent} from './ig-main/ig-main.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {MessageDefinitionComponent} from "./message-definition/message-definition.component";
import {CodeSystemComponent} from "./code-system/code-system.component";

const routes: Routes = [
  {
    path: '', component: IgMainComponent,

    children : [
      { path: '', component: HomeComponent}
    ]
  },
  {
    path: 'home', component: IgMainComponent,

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
  {
    path: 'codesystem', component: IgMainComponent,

    children: [
      { path: ':uri', component: CodeSystemComponent}
    ]
  },
  {
    path: 'valueset', component: IgMainComponent,

    children: [
      { path: ':uri', component: CodeSystemComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




