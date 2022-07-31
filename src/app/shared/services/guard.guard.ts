import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})


export class GuardGuard implements CanActivate {

  constructor(private auth:AuthenticationService,private router:Router){}

  canActivate(
    ): boolean {
     if(this.auth.checkToken()){
       return true
 
     }
     this.router.navigate(['/'])
     return false
 
     
   }
  
}
