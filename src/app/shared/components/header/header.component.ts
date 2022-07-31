import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/movies/services/movies.service';
import { LoginComponent } from 'src/app/user/components/login/login.component';
import { RegisterComponent } from 'src/app/user/components/register/register.component';
import { LoaderService } from '../../services/loader.service';
import { SharedService } from '../../services/shared.service';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedService, public router: Router, private dialog: MatDialog,
     private movieService: MoviesService,private loader:LoaderService) { }

     loading$=this.loader.loading$


  ngOnInit(): void {
  }
  signupAction() {
    this.sharedService.openComponent('550px', RegisterComponent)

  }
  loginAction() {
    this.sharedService.openComponent('550px', LoginComponent)


  }

  addMovie() {

    this.dialog.open(AddEditComponent, {
      width: '70%',
      height: "70%",

      data: { field1: 'Adding Movie', field2: 'Movie name', field3: 'Movie description', field4: "Movie image", field5: "Movie category" }

    })



  }



  // here iam using a shared component called confirmation component 

  logOut() {
    const dialogconfig = new MatDialogConfig()
    dialogconfig.data = {
      message: 'log out'
    }

    const dialogref = this.dialog.open(ConfirmationComponent, dialogconfig)
    dialogref.componentInstance.onEmmitStatus.subscribe((user: any) => {
      dialogref.close()
      localStorage.clear()
      this.router.navigate(['/'])
    })

  }

}
