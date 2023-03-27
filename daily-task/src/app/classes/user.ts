export class User {
    id:number;
    userName:string;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    token:string;

    
    constructor(id:number=0,userName:string ="test", firstName:string="joe", lastName:string="doe", email:string="joe@mail.com",password:string="pass", token:string="") {
      this.id = id;
      this.userName = userName;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.token = token;
    }
        

}
