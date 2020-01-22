import { Component, OnInit } from '@angular/core';
import user_type_data from './user_type_data.js'

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {
  public user_types=[]
  public selected_user_type_name={}
  public selected_user_type=[]
  constructor() { }
  SelectedUserType(name:string){
    this.selected_user_type = this.user_types.filter(m => m.name == name); 
    }
  userType_submit(){
    localStorage.setItem("user_type",JSON.stringify(this.selected_user_type[0]))
  }
  ngOnInit() {
    this.user_types=user_type_data;
  }

}
