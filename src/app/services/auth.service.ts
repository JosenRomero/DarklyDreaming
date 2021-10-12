import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth'; // import AngularFireModule, AngularFireAuthModule in app.module.ts 

import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData$: Observable<any>;

  constructor(public afAuth: AngularFireAuth) { 

    this.userData$ = this.afAuth.authState;
    
  }

  getUser(): Promise<any> {

    return this.userData$.pipe(first()).toPromise();

  }

  async login(email: string, password: string): Promise<any> {

    try {

      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      
      return user;
      
    } catch(err) {
      console.log(err);
    }

  }

  async register(email: string, password: string): Promise<any> {

    try {

      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);

      this.sendVerificationEmail();
      
      return user;

    } catch(err) {
      console.log(err);
    }
    
  }

  async logout(): Promise<void> {

    try {

      await this.afAuth.signOut();

    } catch(err) {
      console.log(err)
    }
    
  }

  async sendVerificationEmail(): Promise<void> {

    try {

      const currentUser = await this.afAuth.currentUser;

      if(currentUser) {

        return await currentUser.sendEmailVerification();

      }
      
    }catch(err) {
      console.log(err);
    }

  }

  async resetPassword(newEmail: string): Promise<void>  {

    try {

      return await this.afAuth.sendPasswordResetEmail(newEmail);

    }catch(err) {
      console.log(err);
    }

  }

}
