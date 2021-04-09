import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
// You don't need to import firebase/app either since it's being imported above
import 'firebase/auth' ;
import 'firebase/firestore';
import auth from 'firebase/firebase-auth'
import { firebase } from '@firebase/app'
import '@firebase/auth'
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router, 
  ) { }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!');
        this.router.navigate(['/dashboard']);
    }).catch((error) => {
        console.log(error)
    })
  }

}