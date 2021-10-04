import { Component, OnInit } from '@angular/core';

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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onRegister() {
    
    const { email, password } = this.registerForm.value;
    this.authService.register(email, password);

    console.log("registrado!!!");
    
  }

}
