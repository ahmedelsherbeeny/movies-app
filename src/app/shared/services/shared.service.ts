import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private dialog:MatDialog,private snackBar:MatSnackBar) { }

  openComponent(width:string,component:any){
    const dialogConfig=new MatDialogConfig();

    dialogConfig.width=width
    this.dialog.open(component,dialogConfig)

  }

  notifyMe(notification:string,action:any){
    if (action === 'error') {
      this.snackBar.open(notification, action, {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['black-snackbar'],
        duration: 2000

      })
    }
    else {
      this.snackBar.open(notification, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['green-snackbar'],
        duration: 2000

      })

    }




  }
}
