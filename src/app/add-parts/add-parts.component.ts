import { Component, OnInit } from '@angular/core';
import {Parts} from '../vehicleapplication/Parts';
import { VehicleApplicationService } from '../vehicleapplication/vehicle-application.service';
import { Router } from '@angular/router';
import { FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-parts',
  templateUrl: './add-parts.component.html',
  styleUrls: ['./add-parts.component.css']
})
export class AddPartsComponent implements OnInit {
newApplication: Parts;
  partsForm: FormGroup
   constructor(private vehicleApplicationService: VehicleApplicationService,private router: Router) {

this.partsForm=new FormGroup(
      {
          partName:new FormControl(),
          description: new FormControl(),
          price:new FormControl(),

    }
);
   }

  ngOnInit() {


  }


 addPart() {

    this.newApplication = this.partsForm.value;
    console.log('PartName...:'+this.newApplication.partName);
    this.vehicleApplicationService.addPart(this.newApplication);
      alert("Part added successfully");
    this.router.navigate(['/employee-dashboard']);
  }



  
 /* showPart() {
    alert("inside showpart method");
    this.newApplication = this.partsForm.value;
    console.log('PartName...:'+this.newApplication.partName);
    this.vehicleApplicationService.showPart(this.newApplication);
    alert("outside showpart method");
  
    //this.router.navigate(['/user-registrtion']);
  }*/
}