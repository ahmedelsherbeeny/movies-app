import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { AllMoviesComponent } from './movies/components/all-movies/all-movies.component';
import { GuardGuard } from './shared/services/guard.guard';

const routes: Routes = [
  {path:'allmovies',component:AllMoviesComponent,canActivate:[GuardGuard]},
  {path:"",component:HomeComponent},


{path:'**', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
