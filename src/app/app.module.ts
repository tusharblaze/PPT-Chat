import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { UserRegisterModule } from './user-register/user-register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { UserRegisterService } from './user-register/user-register.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserDashboardModule,
    UserRegisterModule,
    BrowserAnimationsModule
  ],
  providers: [UserRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
