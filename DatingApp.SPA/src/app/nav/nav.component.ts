import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  username = '';

  constructor(
    private alertifyService: AlertifyService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    if (this.authService.loggedIn()) {
      console.log(this.authService.decodedToken);
      this.username = this.authService.decodedToken.unique_name || '';
    }
  }

  login() {
    this.authService.login(this.model).subscribe(
      data => {
        this.alertifyService.success('logged in successfully');
      },
      error => {
        this.alertifyService.error(error);
      }
    );
  }

  logout() {
    this.authService.userToken = null;
    localStorage.removeItem('token');
    this.alertifyService.message('logged out');
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
