import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
  })
export class AuthService{
    loggedIn = false;
    userId : string = '';
    constructor(private http:HttpClient) {
        
    }
    authenticate(username:string, password:string) {
       let  url = `http://localhost:8081/authenticate/${username}/${password}`;
      // console.log(url)
        return this.http.get<any>(url);
      }

    
}
