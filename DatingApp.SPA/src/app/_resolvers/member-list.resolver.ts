import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { User } from '../_models/User';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import 'rxjs/add/observable/of';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
  pageSize = 5;
  pageNumber = 1;

  constructor(private userService: UserService, private router: Router, private alertify: AlertifyService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User[] | Observable<User[]> | Promise<User[]> {
    return this.userService.getUsers(this.pageNumber, this.pageSize).catch(error => {
      this.alertify.error('Problem retrieving data');
      this.router.navigate(['/home']);
      return Observable.of(null);
    });
  }
}
