import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService  implements CanActivate {

  constructor(private authicationservice:AuthenticationService,
              private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    if(this.authicationservice.isUserLoggedIn()){
    return true;
    }
    this.router.navigate(['']);
    return false;
  }
 
}
