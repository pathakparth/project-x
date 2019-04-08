import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Application Imports */
import { AppRoutes } from './app-config/config.constant';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { LoginComponent } from './core/authentication/login/login.component';

const routes: Routes = [
  {
    path: AppRoutes.unAuthenticatedPage,
    component: LandingPageComponent
  },
  {
    path: AppRoutes.login,
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: AppRoutes.unAuthenticatedPage,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
