import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css']
})
export class UserLoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  moveToSignUp(){
    console.log(" moveToSignUp called...")
    $('#container').removeClass('right-panel-active');
  }

  moveToSignIn(){
    $('#container').addClass('right-panel-active');
  }

}
