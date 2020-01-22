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
  ngOnInit() {
    this.IPArray=[{ip:""}];
    this.user_type=JSON.parse(localStorage.getItem("user_type"));
    this.saveButtonDisabled=true
  }

  // add input field
  addIP=()=>{
    this.saveButtonDisabled=true;
    console.log("add IP");
    if(this.IPArray.length<this.user_type.length){
      this.IPArray.push({ip:""})
    }
  }


  // delete input field
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

  // save IPs
  save=()=>{
    console.log("in save")
    localStorage.setItem("IPList",JSON.stringify(this.IPArray))  
    alert("saved successfully");
    this.saveButtonDisabled=true
  }

  // validate input field on change
  onChange=(index)=>{
    this.saveButtonDisabled=true;
    for(var i=0;i<this.IPArray.length;i++){
      if(this.validateIp(i))
      {
        if(this.validate()){
        this.saveButtonDisabled=false;

        }
        else{
          this.saveButtonDisabled=true;
          break;
        }
       
      }
      else{
        this.saveButtonDisabled=true;
        break;
      }
    }
    console.log("in on change");
    
    
  }

  
  validate=()=>{
    var data;
     data=this.IPArray.find(function(element) { 
      return element.ip===""; 
    });
    console.log(data)
    if(data===undefined && localStorage.getItem("IPList")!==JSON.stringify(this.IPArray))
    return true
    else
    return false
  }

  validateIp=(index)=>{
    if(this.IPArray[index].ip==="")
    return true
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if(this.IPArray[index].ip.match(ipformat))
    {
      return true;
    }else
    {
      return false

    }
   
  }
}



//172.16.254.1

