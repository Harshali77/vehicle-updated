/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
import { Component, OnInit } from '@angular/core';
import {VehicleUsers} from '../vehicleapplication/vehicle-users';
import {VehicleVehicle} from '../vehicleapplication/vehicle-vehicle';
import { VehicleApplicationService } from '../vehicleapplication/vehicle-application.service';
import { Router } from '@angular/router';
import { FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  newApplication: VehicleVehicle;
  userForm: FormGroup;


  constructor(private vehicleApplicationService: VehicleApplicationService,private router: Router) { 

    this.userForm=new FormGroup(
      {
          vehicleName:new FormControl(),
          vehicleType: new FormControl(),
          vehicleColor: new FormControl(),
          

      }
    
    );
  }

  ngOnInit() {
   
  }

  registerUser() {

    this.newApplication = this.userForm.value;
    console.log('vehicleName...:'+this.newApplication);
    this.vehicleApplicationService.addVehicle(this.newApplication);
    this.router.navigate(['/employee-dashboard']);
  }

}
