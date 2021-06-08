import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userList:string[]= ['User1','User2','User3','User4','User5','User6']
  constructor() { }

  ngOnInit() {
  }

}
