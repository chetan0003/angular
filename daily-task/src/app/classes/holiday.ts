import { MyService } from "../service";

  export class Holiday {
    id:number;
    name:string;
    userId:number;
    date:Date;

    constructor(id:number = 0, name:string='', userId:number=0,date=new Date()) {
      this.id = id;
      this.name = name;
      this.date = date;
      this.userId = userId;
    }

}