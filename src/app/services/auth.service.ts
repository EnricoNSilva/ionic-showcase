import { Injectable } from '@angular/core';
import { getApps, initializeApp } from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly auth: firebaseAuth.Auth;

  constructor() {
    // Garante inicializacao unica mesmo em testes e hot reload.
    if (!getApps().length) {
      initializeApp(environment.firebaseConfig);
    }

    this.auth = firebaseAuth.getAuth();
  }

  register(email: string, password: string) {
    return firebaseAuth.createUserWithEmailAndPassword(
      this.auth,
      email,
      password,
    );
  }

  login(email: string, password: string) {
    return firebaseAuth.signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return firebaseAuth.signOut(this.auth);
  }

  onAuthStateChanged(callback: (user: firebaseAuth.User | null) => void) {
    return firebaseAuth.onAuthStateChanged(this.auth, callback);
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }
}
