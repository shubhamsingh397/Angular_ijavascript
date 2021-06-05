import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth-service';
import { UserDataService } from '../Services/UserDataService';
import { User } from '../Models/UserModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userid :any ='';
  user:User = {} as User;
  error =null;
  twoWayData = 'Example Data'
  constructor(private authService:AuthService,private userDataService:UserDataService) { }

  ngOnInit() {
    this.userid = sessionStorage.getItem("userid");
    console.log(this.userid);
    this.refreshDetails();
  }

  refreshDetails(){
    this.userDataService.getUserDetails(this.userid).subscribe(response=>{
    this.user = response;
    console.log(this.user);
  }, error=>{
    this.error = error.error;
    console.log(this.error);
  });
  }
}
