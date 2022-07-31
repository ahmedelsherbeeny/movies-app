import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  details:any={}
  onEmmitStatus=new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any) { }

  ngOnInit(): void {
    if(this.dialogData){
      this.details=this.dialogData
    }
  }
  handleAction(){
    this.onEmmitStatus.emit()
  }

}
