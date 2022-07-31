import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from '../user/components/login/login.component';
import { RegisterComponent } from '../user/components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    RouterModule,
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class HomeModule { }
