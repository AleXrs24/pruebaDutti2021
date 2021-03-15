import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
// Interfaces
import { Credentials } from 'src/app/interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private afAuth: AngularFireAuth) { }

  getCurrentUser(): Observable<firebase.User>{
    return this.afAuth.user;
  }
  
  logInWithCredentials(credentials: Credentials): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  async logInWithCredentialsTest(credentials: Credentials): Promise<boolean> {
    try {
      const result = await this.logInWithCredentials(credentials);
      return !!result;
    } catch (e) {
      return false;
    }
  }

  signInWithCredentials(data: Credentials): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(data.email, data.password);
  }

  async signInWithCredentialsTest(data: Credentials): Promise<boolean> {
    try {
      const result = await this.signInWithCredentials(data);
      return !!result;
    } catch (e) {
      return false;
    }
  }

  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }
  
}
