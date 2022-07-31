import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../shared/material.module';
import { FilteringComponent } from './components/filtering/filtering.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';




@NgModule({
  declarations: [
    HeaderComponent,
    MovieCardComponent,
    ConfirmationComponent,
    FilteringComponent,
    AddEditComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule ,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  exports: [
    HeaderComponent,
    MovieCardComponent,
    ConfirmationComponent,
    MaterialModule,
    FilteringComponent ,
    AddEditComponent
  ]
})
export class SharedModule { }
