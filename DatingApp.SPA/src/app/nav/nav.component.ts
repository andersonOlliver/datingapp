import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 0560b06fe2cedd00c4ac2a55599e29c33d56c6ab

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  username = '';

<<<<<<< HEAD
  constructor(private alertifyService: AlertifyService, public authService: AuthService, private router: Router) {}
=======
  constructor(
    private alertifyService: AlertifyService,
    public authService: AuthService
  ) {}
>>>>>>> 0560b06fe2cedd00c4ac2a55599e29c33d56c6ab

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
<<<<<<< HEAD
        this.alertifyService.error('Failed to login');
      },
      () => {
        this.router.navigate(['/members']);
=======
        this.alertifyService.error(error);
>>>>>>> 0560b06fe2cedd00c4ac2a55599e29c33d56c6ab
      }
    );
  }

  logout() {
    this.authService.userToken = null;
    localStorage.removeItem('token');
    this.alertifyService.message('logged out');
<<<<<<< HEAD
    this.router.navigate(['/home']);
=======
>>>>>>> 0560b06fe2cedd00c4ac2a55599e29c33d56c6ab
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
