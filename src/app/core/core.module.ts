import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Application Imports */
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationModule
  ]
})
export class CoreModule { }
