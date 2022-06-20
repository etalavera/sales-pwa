import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token: string | null = localStorage.getItem('token');
    if(token) {
      return true;
    }

    this.router.navigateByUrl('/auth/login', {skipLocationChange: true});
    return false;
  }
  
}
