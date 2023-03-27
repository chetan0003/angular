export class Response {
    
    statusCode:number;
    totalRecords:number;
    message:string;
    data:object;
    

    
    constructor(statusCode:number =0, totalRecords:number=0, message:string="", data:object=new Object,) {
      this.statusCode = statusCode;
      this.totalRecords = totalRecords;
      this.message = message;
      this.data = data;
    }
        

}
