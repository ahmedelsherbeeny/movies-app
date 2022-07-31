import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private router: Router,private auth:AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken()

   

    if (token) {
      request = request.clone({  headers: request.headers.set('Authorization', `Bearer ${token}`)  })
    }
   
    return next.handle(request).pipe(
      catchError((err)=>{
        if(err instanceof HttpErrorResponse){
          console.log(err.url)
          if(err.status == 401  ){
            
            localStorage.clear()
            this.router.navigate(['/'])


           
          }
        }
        return throwError(err)
      })
    )
    


  }
}
