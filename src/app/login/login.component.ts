import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import "firebaseui";
import {firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import { AuthService } from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void { } 
  }

  


