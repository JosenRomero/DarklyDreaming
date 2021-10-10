import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLogoutGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {

    return this.authService.userData$.pipe(
      map(user => {

        if(!user) { // if user is not logged then the route can be activated
          return true;
        }

        this.router.navigate(['/notes']);
        return false; // if user is logged then the route cannot be activated

      })
    );

  }
  
}
