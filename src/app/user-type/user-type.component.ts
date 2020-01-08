import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {
  public user_type:string;
  constructor() { }
  userType_submit(){
    localStorage.setItem("user_type",this.user_type)
  }
  ngOnInit() {
  }

}
