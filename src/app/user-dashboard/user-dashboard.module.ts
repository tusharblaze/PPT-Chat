import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { MatSidenavModule } from '@angular/material';


@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    MatSidenavModule
  ]
})
export class UserDashboardModule { }
