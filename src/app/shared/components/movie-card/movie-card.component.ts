import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/movies/services/movies.service';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() data:any=[]
  @Input() movieID:any

  results:any

  

  constructor(private moviesService:MoviesService,private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
  }








  edit(id:any): void {

    this.moviesService.getMoviebyid(id).subscribe((res:any)=>{
      this.results=res
    })
    this.dialog.open(AddEditComponent, {
      width:'70%',
      height:"70%",
      data:{field2:'Movie name',field3:'Movie description',field4:"Movie image",field5:"Movie category"}

    
   }).afterClosed().subscribe(val=>{
     if(val==='update'){
       this.moviesService.getAllMovies()
     }
   })
  

   
}
deleteMovie(id:any){

  const dialogconfig=new MatDialogConfig()
  dialogconfig.data={
    message:'delete this movie'
  }
  const dialogref=this.dialog.open(ConfirmationComponent,dialogconfig)
  dialogref.componentInstance.onEmmitStatus.subscribe((user:any)=>{
    this.moviesService.deleteMovie(id).subscribe((res:any)=>{
      console.log(res)
      
    })
    dialogref.close()
    this.router.navigate(['/allmovies'])
  })





  

}

}
