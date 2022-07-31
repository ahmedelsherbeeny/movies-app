import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { UserModule } from './user/user.module';
import { AuthenticationInterceptor } from './shared/interceptors/authentication.interceptor';
import { MoviesModule } from './movies/movies.module';
import { GuardGuard } from './shared/services/guard.guard';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    MaterialModule,
    UserModule,
    MoviesModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
    GuardGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
