import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms'; // import ReactiveFormsModule in app.module.ts 

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin() {
    
    try {

      const { email, password } = this.loginForm.value;

      const user = await this.authService.login(email, password);

      if(user) {
        this.router.navigate(['/notes']);
      }

    }catch(err){
      console.log(err);
    }

  }

}
