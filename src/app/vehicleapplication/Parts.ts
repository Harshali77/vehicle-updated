export class Parts {
   partId: number;
    partName: string;
    description: string;
    price: number;
   
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}