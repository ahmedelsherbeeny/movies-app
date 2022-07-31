import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {
  selected = new FormControl('selected', [Validators.required,]);

  selectFormControl = new FormControl('selected', [Validators.required]);






  @Input()title:string=""
  @Input() data:any
  @Input () value:any

  @Output() filterData=new EventEmitter()

  id:any

  constructor() { }

  ngOnInit(): void {
  }
 // when clicking on categorie,s ids we emit the id of the category 
  detectChanges(event:any){
    this.filterData.emit(event)

  }
 
}
