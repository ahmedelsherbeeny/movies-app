import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs/operators';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(public loader:LoaderService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loader.show();


    return next.handle(request).pipe(
      finalize(()=>{
        setTimeout(() => {
          this.loader.hide()
        }, 1000);

      })
    )
  }
}
