import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path:'',
      loadChildren:()=>import('./user-register/user-register.module').then(m => m.UserRegisterModule)
    },
    {
      path: 'user-dashboard',
      loadChildren: ()=>import('./user-dashboard/user-dashboard.module').then(m=> m.UserDashboardModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
