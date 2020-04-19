import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './../models/register.model'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: RegisterModel;
  loginFailed: boolean;
  errMessage: '';

  constructor(public authService: AuthService,
  private router: Router) 
  { 
    this.model = new RegisterModel('', '', '', '', '', false) 
   }

  ngOnInit() { }

  register() {
    this.authService.register(this.model)
    .subscribe()
  }
}
