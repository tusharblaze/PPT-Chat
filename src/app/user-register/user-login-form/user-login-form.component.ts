import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UrlConstant } from 'src/app/url-constant/url-constant';
import { user } from '../entity/user';
import { UserRegisterService } from '../user-register.service';

declare var $:any;

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css']
})
export class UserLoginFormComponent implements OnInit {

  constructor(private http:HttpClient,private userService:UserRegisterService) { }

  ngOnInit() {
  }

  moveToSignUp(){
    console.log(" moveToSignUp called...")
    $('#container').removeClass('right-panel-active');
  }

  moveToSignIn(){
    $('#container').addClass('right-panel-active');
  }

  getUserDetails(){
     this.userService.getAllUserDetails().subscribe(data=>{
       console.log(data);
     },error=>{
       console.log(error);
     })
  }
}
