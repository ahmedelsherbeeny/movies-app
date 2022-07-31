import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
 
 
 
url=environment.APIURL
  constructor(private http:HttpClient) { }


  getAllMovies(){
    return this.http.get(this.url+"/api/movies")

  }
  getAllCategories() {
    return this.http.get(this.url+"/api/category")
  }
  getMoviesByCategoruId(id:any) {
    return this.http.get(this.url+"/api/moviesByCategory/"+id);
  }
  getMoviebyid(id?: any) {
    return this.http.get(this.url+"/api/movies/"+id);
  }

  createMovie(data: any):Observable<any> {
    return this.http.post(this.url,data).pipe(tap((res:any)=>{
      console.log(res)
    })
      
    )
  }

  updateMovie(data:any,id:any){
    return this.http.put(this.url+"/api/movies/"+id,data);


  }

  deleteMovie(id:any){
    return this.http.delete(this.url+"/api/movies/"+id);


  }
  
}
