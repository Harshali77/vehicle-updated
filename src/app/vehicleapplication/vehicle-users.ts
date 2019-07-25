export class VehicleUsers {
    firstName: string;
    lastName: string;
    email: string;
    userId:string;
    userType:string;
    userName:String ;
    password:string;
   
    gender:string;
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}