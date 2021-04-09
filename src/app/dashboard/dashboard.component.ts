import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  current_username = '';
  constructor(auth_service : AuthService) {
    var current_user = auth_service.userData;
    this.current_username = current_user.displayName;
   }
  
  ngOnInit(): void {
  }

}
