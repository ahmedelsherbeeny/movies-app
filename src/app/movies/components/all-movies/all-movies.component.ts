import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {

  selected = new FormControl('All', [Validators.required,]);

  selectFormControl = new FormControl('All', [Validators.required]);

  constructor(private router: Router, private moviesService: MoviesService) { }
  movies: any = []
  categories: any = []


  ngOnInit(): void {
    this.getMovies()
    this.getAllCategories()
  }



  getMovies() {
    this.moviesService.getAllMovies().subscribe((data: any) => {
      this.movies = data
      console.log(data)
    })

  }


  getAllCategories() {
    this.moviesService.getAllCategories().subscribe((data: any) => {
      this.categories = data
    })

  }



  filterMovies(event: any) {
    this.moviesService.getMoviesByCategoruId(event.value.id).subscribe((data: any) => {
      console.log(event.value)

      this.movies = data
      if (event.value == "All") {
        this.getMovies()
      }
    })

  }


}
