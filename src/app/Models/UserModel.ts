import { Transactions } from "./Transaction";

export class User{
    constructor(public userId:string,public name:string, public password: string, public lastLogin:Date,public balance:number,
        public transactions:Transactions[]) 
    {
        
    }
}