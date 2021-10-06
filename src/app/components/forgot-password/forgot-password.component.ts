import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms'; // import ReactiveFormsModule in app.module.ts

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email = new FormControl('');

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onReset() {

    try {

      await this.authService.resetPassword(this.email.value);
      console.log('Email sent, check your inbox');
      this.router.navigate(['/login']);

    }catch(err) {
      console.log(err);
    }

  }

}
