import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from '../Services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   userid: string = '';
   password:string = '';
   error = null;
  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  onLogin(form:NgForm){
    //console.log(form.value);
   // if(form.value.userid === "shubham@gmail.com" && form.value.password==="shubhamsingh")
  this.authService.authenticate(form.value.userid,form.value.password).subscribe(response=>{
     this.authService.loggedIn = true;
     this.authService.userId = response.userId;
      sessionStorage.setItem("userid",response.userId);
     this.router.navigate(['/homepage']);
   }, error=>{
     this.error = error.error;
     this.authService.loggedIn = false;
     console.log(this.error);
   })
    
   
     
  }
}

