import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';


const routes: Routes = [
  {
    path: '',
    component: UserRegistrationFormComponent
  } ,
  {
    path: 'login',
    component: UserLoginFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRegisterRoutingModule { }
