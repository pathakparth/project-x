import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Application Imports */

/* Modules */
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './navigation/navigation.module';
/* Components */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    PublicModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
