import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Application Imports */
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
