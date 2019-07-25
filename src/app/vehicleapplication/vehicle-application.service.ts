/*import { Injectable } from '@angular/core';
import {VehicleUsers} from '../vehicleapplication/vehicle-users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import {Parts} from '../vehicleapplication/Parts';
import {VehicleVehicle} from '../vehicleapplication/vehicle-vehicle';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class VehicleApplicationService {
  vehicleusers: VehicleUsers[] = [];
  Parts: Parts[]= [];
  vehiclevehicle: VehicleVehicle[] = [];
  
  
 
  
  constructor(private httpClient: HttpClient) { }


  addUser(user:VehicleUsers) {
    console.log('Inside vehicle service addmethod...'+user.email
    )
    this.httpClient.post('http://localhost:7777/users/', user).subscribe((response) => {
      console.log('Inside angular add service.....');
    });
  }
 addPart(user:Parts) {
    console.log('Inside vehicle service addmethod...'+user.partName);
    this.httpClient.post('http://localhost:7777/SpareParts/addPart', user).subscribe((response) => {
      console.log('Inside angular add service.....');
    });
  }
    addVehicle(vehicle:VehicleVehicle) {
    console.log('Inside vehicle service addmethod...'+vehicle.vehicleType)
    this.httpClient.post('http://localhost:7777/vehicles/addVehicle', vehicle).subscribe((response) => {
      console.log('Inside angular add service.....');
      });
  }

  showPart(user:Parts) {
    console.log('Inside vehicle service addmethod...'+user.partName);
  //return this.httpClient.get<Parts[]>('http://localhost:7777/SpareParts/showAllparts').subscribe((response) => {
      //console.log(Parts);
      return this.httpClient.get('https://localhost:7777/SpareParts/showAllparts');
    //});
  }
  /* ngOnInit(): void {
    this.showPart.get<parts[]>(URL)
     .subscribe(response =>  {
        this.Parts = response.list as Parts[];
     }, error => {
       alert('error');
     });
 }*/
/*deletePart(partId: number) {
    // TODO: Make request to delete part
    console.log('http://localhost:7777/delete/'+partId);
    return this.httpClient.delete('http://localhost:7777/deletePart/'+partId, httpOptions).pipe(
      map( (response: any) => response),
      catchError(this.handleError<Parts>('deletePart'))
    );
  }
    private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`$(operation) failed: $(error.message)`);
      return of(result as T);
    };
  }


} */

import { Injectable } from '@angular/core';
import {VehicleUsers} from '../vehicleapplication/vehicle-users';
import {Login} from '../vehicleapplication/Login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import {Parts} from '../vehicleapplication/Parts';
import {VehicleVehicle} from '../vehicleapplication/vehicle-vehicle';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class VehicleApplicationService {
  vehicleusers: VehicleUsers[] = [];

  router: Router;
  Parts: Parts[]= [];
    vehiclevehicle: VehicleVehicle[] = [];
 
  
  constructor(private httpClient: HttpClient) { }

  // Add a loan application
  addUser(user:VehicleUsers) {
    console.log('Inside verhicle service addmethod...'+user.email
    )
    this.httpClient.post('http://localhost:7777/users/newuser', user).subscribe((response) => {
      console.log('Inside angular add service.....');
    });
  }
  verifyUser(user:Login) {
    console.log('Inside verhicle service verify user...'+user.userName+ user.userType+user.password);
     return this.httpClient.post('http://localhost:7777/users/validate', user);
  }

  showUsers() {
    console.log('Inside verhicle service show users dmethod...')
    return this.httpClient.get('http://localhost:7777/users/showAllUsers');
  }
  showParts() {
    console.log('Inside verhicle service show Parts dmethod...')
    return this.httpClient.get('http://localhost:7777/SpareParts/showAllparts');
  }


addPart(user:Parts) {
    console.log('Inside vehicle service addmethod...'+user.partName);
    this.httpClient.post('http://localhost:7777/SpareParts/addPart', user).subscribe((response) => {
      console.log('Inside angular add service.....');
    });
  }
 
 addVehicle(vehicle:VehicleVehicle) {
    console.log('Inside vehicle service addmethod...'+vehicle.vehicleType)
    this.httpClient.post('http://localhost:7777/vehicles/addVehicle', vehicle).subscribe((response) => {
      console.log('Inside angular add service.....');
      });
  }

}