export class Login {
    userName:string;
    password:string;
    userType:string;
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}