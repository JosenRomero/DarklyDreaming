import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user$: Observable<any> = this.authService.afAuth.user;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { 
  }

  async onLogout() {
    
    try {

      await this.authService.logout();

      this.router.navigate(['/login']);

    }catch(err) {
      console.log(err);
    }

  }

}
