import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private user: User) { }
  setData(user){
    this.user = user;
    this.user.uid = user.uid,
    this.user.email = user.email,
    this.user.displayName = user.displayName,
    this.user.photoURL = user.photoURL,
    this.user.emailVerified = user.emailVerified
  }

  getData(): User{
    return this.user;
  }
}
