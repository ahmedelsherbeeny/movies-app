import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/movies/services/movies.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
tokenExist!:boolean
  constructor(private router:Router,private movieService:MoviesService,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.tokenExist=this.authService.checkToken()
    if(this.tokenExist== true){
      localStorage.clear()
    }

    

    


    

   
  }
 

}
