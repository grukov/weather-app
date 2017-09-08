import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';

import { DisplayUserComponent } from './display-user/display-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MyCitiesComponent } from 'app/my-cities/my-cities.component';

import { AuthService } from './../shared/auth.service';

@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DisplayUserComponent,
    LoginUserComponent,
    RegisterUserComponent,
    ResetPasswordComponent,
    MyCitiesComponent,
  ],
  providers: [AuthService]
})
export class UsersModule { }
