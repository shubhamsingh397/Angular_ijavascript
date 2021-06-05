
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../Models/UserModel";


@Injectable({
    providedIn: 'root'
  })
export class UserDataService{
    constructor(private http:HttpClient) {
        
    }

    getUserDetails(userid:string){
        let  url = `http://localhost:8081/user/${userid}`;
        return this.http.get<User>(url);
    }
}