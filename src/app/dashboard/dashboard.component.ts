import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { fabric } from 'fabric';
import { CanvasComponent } from '../canvas/canvas.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  current_username = '';
  current_photoURL = '';
  constructor(auth_service : AuthService) {
    var current_user = auth_service.userData;
    this.current_username = current_user.displayName;
    this.current_photoURL = current_user.photoURL;
   }
  
  ngOnInit(): void { }
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
 openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

}
