import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserTokenGuard implements CanActivate {
  constructor(
    private loginSrv: LoginService,
    private router: Router,
    ){}
  canActivate = () => {
    if (!!this.loginSrv.token){
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
