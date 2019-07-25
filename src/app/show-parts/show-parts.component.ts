import { Component, OnInit } from '@angular/core';
import {Parts} from '../vehicleapplication/Parts';
import { VehicleApplicationService } from '../vehicleapplication/vehicle-application.service';
import { Router } from '@angular/router';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-show-parts',
  templateUrl: './show-parts.component.html',
  styleUrls: ['./show-parts.component.css']
})
export class ShowPartsComponent implements OnInit {

 newApplication: Parts;
  partsForm: FormGroup
    Parts: Parts[]= [];
      allParts: any;
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
    this.vehicleApplicationService.showParts().subscribe(
     (response) => {
       this.allParts = Object.assign([], response);
     }); 
 }
 /*public showPart() {
    this.vehicleApplicationService.showPart().subscribe((response) => {
      this.Parts = Object.assign([], response);
    });
  }*/

/*
  showPart() {

    this.newApplication = this.partsForm.value;
    console.log('PartName...:'+this.newApplication.partName);
    this.vehicleApplicationService.showPart(this.newApplication);
  
    //this.router.navigate(['/user-registrtion']);
  }*/
}
