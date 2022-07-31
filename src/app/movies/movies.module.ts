import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AllMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSelectModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[
    AllMoviesComponent
  ]
})
export class MoviesModule { }
