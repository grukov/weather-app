import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayUserComponent } from './display-user/display-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MyCitiesComponent } from 'app/my-cities/my-cities.component';
import { AuthService } from './../shared/auth.service';

const routes: Routes = [
  { path: 'login', component: LoginUserComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'details', component: DisplayUserComponent, canActivate: [AuthService] },
  { path: 'forgot-password', component: ResetPasswordComponent },
  { path: 'my-cities', component: MyCitiesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
