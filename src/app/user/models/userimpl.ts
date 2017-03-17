import {User} from './user'
export class UserImp implements User{

    userName:string;
    email:string;
    password:string;
    country : string;
    birthday : Date;


    constructor(authData: any){
        console.log(authData);
        console.log(authData.auth);
        this.email = authData.auth.email;
        console.log(this);
    }
}