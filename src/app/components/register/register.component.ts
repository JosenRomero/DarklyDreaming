import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms'; // import ReactiveFormsModule in app.module.ts 

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onRegister() {
    
    try {

      const { email, password } = this.registerForm.value;
      const user = await this.authService.register(email, password);

      if(user) {
        this.router.navigate(['/verification-email']);
      }

    }catch(err) {
      console.log(err);
    }
    
  }

}
