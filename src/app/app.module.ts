import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { UserRegisterModule } from './user-register/user-register.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserDashboardModule,
    UserRegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
