import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  public readonly loading$=this.isLoading.asObservable()


  constructor() { }
  show(){
    this.isLoading.next(true)
  }
  hide(){
    this.isLoading.next(false)
  }
}
