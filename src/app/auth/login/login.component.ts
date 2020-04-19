import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginModel } from './../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel
  loginFailed: boolean;
  errMessage: ''

  constructor(public authService: AuthService,
  private router: Router) { 
    this.model = new LoginModel('', '')
   }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model)
    .subscribe()
  }

}
