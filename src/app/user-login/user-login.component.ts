import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Login} from '../vehicleapplication/Login';
import { VehicleApplicationService } from '../vehicleapplication/vehicle-application.service';
import { FormGroup, Validators,FormControl,FormBuilder } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  //logins:any = [];

 newApplication: Login;
  loginForm: FormGroup;
  public Login : Login;
   public User : User;
   

 

  constructor(private vehicleApplicationService: VehicleApplicationService,private router: Router) { 
    this.Login=new Login();
    this.loginForm=new FormGroup(
      {         
         userName: new FormControl(),
         password: new FormControl(),
         userType: new FormControl()

      }
    
    ); }

  ngOnInit() {
  }

  validateUser(){
    if(this.Login.userName && this.Login.password){
     this.newApplication = this.loginForm.value;
    console.log('firstName...:'+this.newApplication);
this.vehicleApplicationService.verifyUser(this.Login).subscribe((data :{}) => {

  if(data!=null){

      if(this.Login.userType === 'Customer'){
    this.router.navigate(['/customer-dashboard']);
  }else if(this.Login.userType === 'Employee'){
    console.log("employee");
    this.router.navigate(['/employee-dashboard']);
  }else{
     this.router.navigate(['/admin-dashboard']);
  } 
    //this.router.navigate(['/user-register']);
  }
 },
err => {
  console.log("Invalid user....>>>:");
});
    
  
  }else{
    alert("Please provide input fields");
  }
}
}