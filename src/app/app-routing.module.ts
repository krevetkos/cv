import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WorksComponent} from './works/works.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HireComponent} from './hire/hire.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home'}},
  { path: 'home', component: HomeComponent, data: { animation: 'Home'}},
  { path: 'works', component: WorksComponent , data: { animation: 'Works'}},
  { path:'about', component: AboutComponent , data: { animation: 'About'}},
  { path:'contacts', component: ContactComponent , data: { animation: 'Contacts'}},
  { path:'hire',component:HireComponent , data: { animation: 'Hire'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
