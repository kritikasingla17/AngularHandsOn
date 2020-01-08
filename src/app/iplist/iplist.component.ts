import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-iplist',
  templateUrl: './iplist.component.html',
  styleUrls: ['./iplist.component.css']
})
export class IPListComponent implements OnInit {
  public IPArray: any = [];
  public user_type:any="";
  public saveButtonDisabled:any="";

  constructor() { }
  addIP=()=>{
    console.log("add IP");
    if((this.user_type.toUpperCase()==='basic'.toUpperCase() && this.IPArray.length<5)|| (this.user_type.toUpperCase()==='premium'.toUpperCase() && this.IPArray.length<10)){
      this.IPArray.push({})
    }
  }
  deleteIP=(index)=>{
    console.log("delete IP");
    if(this.IPArray.length!=1){
      this.IPArray.splice(index, 1);
    }
    else{
      this.IPArray[0].ip=""
      localStorage.setItem("IPList",JSON.stringify(this.IPArray))  
    }
  }
  save=()=>{
    console.log("in save")
    console.log(this.IPArray)
    localStorage.setItem("IPList",JSON.stringify(this.IPArray))  
    this.saveButtonDisabled=true
  }
  onChange=(index)=>{
    console.log("in on change");
    if(this.validateIp(index)){
      if(this.validate()){
        this.saveButtonDisabled=false
      }
      else{
        this.saveButtonDisabled=true
      }
    }
    else{
      this.saveButtonDisabled=true

    }
    
  }
  ngOnInit() {
    this.IPArray=[{}];
    this.user_type=localStorage.getItem("user_type");
    this.saveButtonDisabled=true
  }
  validate=()=>{
    var data;
     data=this.IPArray.find(function(element) { 
      console.log(element.ip)
      return element.ip===undefined; 
    });
    
    if(data===undefined && localStorage.getItem("IPList")!==JSON.stringify(this.IPArray))
    return true
    else
    return false
  }
  validateIp=(index)=>{
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if(this.IPArray[index].ip.match(ipformat))
    {
      return true;
    
      
    }else
    {
      console.log("not validate")
      return false

    }
   
  }
}



//172.16.254.1

