import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegisterRoutingModule } from './user-register-routing.module';
import { UserRegisterComponent } from './user-register.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';


@NgModule({
  declarations: [UserRegisterComponent, UserRegistrationFormComponent, UserLoginFormComponent],
  imports: [
    CommonModule,
    UserRegisterRoutingModule
  ]
})
export class UserRegisterModule { }
