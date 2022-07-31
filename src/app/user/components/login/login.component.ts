import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { globalVariables } from 'src/app/shared/globalVariables';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm!:FormGroup
responseMessage!:any
  constructor(private fb:FormBuilder,private sharedService:SharedService,
    private user:UserService,private dialog:MatDialogRef<LoginComponent>,private router:Router) { }

    ngOnInit(): void {
      this.logInForm=this.fb.group({
        email:[null,[Validators.required,Validators.pattern(globalVariables.emailRegex)]],
        password:[null,[Validators.required,Validators.pattern(globalVariables.passwordRegex)]]


      })
  
    }
    handleSubmit(){
      var formData=this.logInForm.value;
      var data=
      {
        email:formData.email,
        password:formData.password 
      }
      this.user.logIn(data).subscribe((response:any)=>{
        this.dialog.close()
        this.responseMessage=response?.status

        if(this.responseMessage=="success"){
          this.sharedService.notifyMe("successfully loggedin","")
          localStorage.setItem('token',response.authorisation.token)
        this.router.navigate(['/allmovies'])
        }
        



        


  
      },(error:any)=>{
        this.sharedService.notifyMe(globalVariables.genericErrorForlogin,"error")


      })
  
    }

}
