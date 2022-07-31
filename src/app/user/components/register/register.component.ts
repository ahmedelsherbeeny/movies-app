import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { globalVariables } from 'src/app/shared/globalVariables';
import { SharedService } from 'src/app/shared/services/shared.service';
import { LoginComponent } from '../login/login.component';
import jwtDecode from 'jwt-decode';
import jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm!:FormGroup
  responseMessage!:string
  validData:string=""
  

  constructor(private fb:FormBuilder,private userservise:UserService,
    private dialog:MatDialogRef<RegisterComponent>,private router:Router,private sharedService:SharedService) { }
  

  ngOnInit(): void {
   this.signupForm= this.fb.group({
     name:[null,[Validators.required,Validators.pattern(globalVariables.nameRegex)]],
     email:[null,[Validators.required,Validators.pattern(globalVariables.emailRegex)]],
     password:[null,[Validators.required,Validators.pattern(globalVariables.passwordRegex)]]

    })
  }
  handleSubmit(){
    var formData=this.signupForm.value;
    var data=
    {
      name:formData.name,
      email:formData.email,
      password:formData.password
    }
    this.userservise.signUp(data).subscribe((response:any)=>{
      this.dialog.close()


      this.validData=response?.status

      this.responseMessage=response?.message.email

      if(this.validData=="success"){
        this.sharedService.notifyMe(this.validData,"")
        localStorage.setItem('token',response.authorisation.token)
        this.sharedService.openComponent('550',LoginComponent)
      }
      else{

        this.sharedService.notifyMe(this.responseMessage,"error")


      }
    })

   

}
}
