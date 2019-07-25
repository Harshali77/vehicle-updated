export class VehicleVehicle {
    vehicleName:string;
    vehicleType:String ;
    vehicleColor:string;
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}