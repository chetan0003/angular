export class Task {

    startDate:Date;
    endDate:Date;
    days:number;


    constructor(startDate:Date=new Date,endDate:Date=new Date,days:number=0) {
    this.days = days;
    this.startDate = startDate;
    this.endDate = endDate;
    }
}