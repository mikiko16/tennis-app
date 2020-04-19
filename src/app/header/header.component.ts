import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  current: string;
  
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .subscribe(data => {
        localStorage.clear();
        this.authService.authtoken = '';
      })
      this.current = sessionStorage.getItem('username');
  };

}
