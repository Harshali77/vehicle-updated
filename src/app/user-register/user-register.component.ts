import { Component, OnInit } from '@angular/core';
import {VehicleUsers} from '../vehicleapplication/vehicle-users';
import { VehicleApplicationService } from '../vehicleapplication/vehicle-application.service';
import { Router } from '@angular/router';
import { FormGroup, Validators,FormControl,FormBuilder } from '@angular/forms';
//import { MustMatch } from './_helpers/must-match.validator';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
  
})
export class UserRegisterComponent implements OnInit {
  newApplication: VehicleUsers;
  userForm: FormGroup;
  submitted=false;
  




  constructor(private vehicleApplicationService: VehicleApplicationService,private router: Router,private FormBuilder:FormBuilder) { 
  }
    //this.userForm=new FormGroup(

      ngOnInit(){
this.userForm=this.FormBuilder.group({
          firstName:['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          userName:['', Validators.required],
          userType:['', Validators.required],
          //mobileno:['', Validators.required],
          address:['', Validators.required],
          state: ['', Validators.required],
          city: ['', Validators.required],
          gender:['', Validators.required],
          pincode: ['',[Validators.required,Validators.minLength(6)]],
          password: ['', [Validators.required, Validators.minLength(6)]]
          /*confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')

      }*/
    
 } );
  }

 /* ngOnInit() {
   
  }*/
get f() { return this.userForm.controls; }

onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.userForm.invalid) {
          
            return;
        }
        else{
          this.registerUser();
        }
           
}
 registerUser()
{
  this.newApplication = this.userForm.value;
    console.log('firstName...:'+this.newApplication);
    this.vehicleApplicationService.addUser(this.newApplication);
    this.router.navigate(['/user-login']);
       
    }

}












 /* registerUser() {
   if(this.userForm.value.userId && this.userForm.value.firstName && this.userForm.value.lastName && this.userForm.value.email){
    alert(this.userForm.value.userId);
    this.newApplication = this.userForm.value;
    console.log('firstName...:'+this.newApplication);
    this.vehicleApplicationService.addUser(this.newApplication);
    this.router.navigate(['/add-parts']);
  }else{
    alert("Please provide required fileds to register");
  }}
  */